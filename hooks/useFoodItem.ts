import { create } from "zustand";
import { FoodItem } from "../constants/types";

interface FoodItemStore {
  item: FoodItem | undefined;
  fee: number;
  deliveryTime: Array<number>;
  setItem: (item: FoodItem) => void;
  setFee: (fee: number) => void;
  setDeliveryTime: (time: Array<number>) => void;
}

const useFoodItem = create<FoodItemStore>((set) => ({
  item: undefined,
  fee: 0,
  deliveryTime: [],
  setItem: (item) => set({ item }),
  setFee: (fee) => set({ fee }),
  setDeliveryTime: (time) => set({ deliveryTime: time }),
}));

export default useFoodItem;
