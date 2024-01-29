import { create } from "zustand";
import { FoodItem } from "../constants/types";

interface FoodItemStore {
  item: FoodItem | undefined;
  deliveryTime: Array<number>;
  setItem: (item: FoodItem) => void;
  setTime: (timeArray: Array<number>) => void;
}

const useFoodItem = create<FoodItemStore>((set) => ({
  item: undefined,
  deliveryTime: [],
  setItem: (item) => set({ item }),
  setTime: (timeArray) => set({ deliveryTime: timeArray }),
}));

export default useFoodItem;
