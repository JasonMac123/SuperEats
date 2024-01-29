import { create } from "zustand";

interface RestaurantStore {
  deliveryTime: Array<number>;
  setTime: (timeArray: Array<number>) => void;
}

export const useRestaurant = create<RestaurantStore>((set) => ({
  deliveryTime: [],
  setTime: (timeArray) => set({ deliveryTime: timeArray }),
}));
