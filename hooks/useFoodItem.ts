import { create } from "zustand";
import { FoodItem } from "../constants/types";

interface FoodItemStore {
  item: FoodItem | undefined;
  setItem: (item: FoodItem) => void;
}

const useFoodItem = create<FoodItemStore>((set) => ({
  item: undefined,
  setItem: (item) => set({ item }),
}));

export default useFoodItem;
