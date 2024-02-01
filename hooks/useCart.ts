import { create } from "zustand";

import { FoodItem } from "../constants/types";

interface CartStore {
  products: Array<FoodItem & { quantity: number }>;
  quantity: number;
  total: number;
  addProduct: (product: FoodItem, orderAmount?: number) => void;
  reduceProduct: (product: FoodItem) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  products: [],
  quantity: 0,
  total: 0,
  addProduct: (product, orderAmount = 1) => {
    set((state) => {
      state.quantity += orderAmount;
      state.total += product.price;

      const hasProduct = state.products.find((p) => p.name === product.name);

      if (hasProduct) {
        hasProduct.quantity += orderAmount;
        return { products: [...state.products] };
      } else {
        return {
          products: [...state.products, { ...product, quantity: orderAmount }],
        };
      }
    });
  },
  reduceProduct: (product) => {
    set((state) => {
      state.total -= product.price;
      state.quantity -= 1;

      return {
        products: state.products
          .map((p) => {
            if (p.name === product.name) {
              p.quantity -= 1;
            }
            return p;
          })
          .filter((p) => p.quantity > 0),
      };
    });
  },
  clearCart: () => set({ products: [], quantity: 0, total: 0 }),
}));
