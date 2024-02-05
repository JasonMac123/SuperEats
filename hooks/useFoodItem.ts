import { create } from "zustand";
import { FoodItem } from "../constants/types";

interface FoodItemStore {
  item: FoodItem | undefined;
  fee: number;
  deliveryTime: Array<number>;
  restaurantName: string;
  setItem: (item: FoodItem) => void;
  setFee: (fee: number) => void;
  setDeliveryTime: (time: Array<number>) => void;
  setRestaurantName: (name: string) => void;
}

const useFoodItem = create<FoodItemStore>((set) => ({
  item: undefined,
  fee: 0,
  deliveryTime: [],
  restaurantName: "",
  setItem: (item) => set({ item }),
  setFee: (fee) => set({ fee }),
  setDeliveryTime: (time) => set({ deliveryTime: time }),
  setRestaurantName: (name) => set({ restaurantName: name }),
}));

export default useFoodItem;
