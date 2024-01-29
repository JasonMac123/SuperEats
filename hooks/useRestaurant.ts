import { create } from "zustand";

interface RestaurantStore {
  fee: number;
  deliveryTime: Array<number>;
  setFee: (fee: number) => void;
  setTime: (timeArray: Array<number>) => void;
}

export const useRestaurant = create<RestaurantStore>((set) => ({
  fee: 0,
  deliveryTime: [],
  restaurants: [],
  setFee: (fee) => set({ fee }),
  setTime: (timeArray) => set({ deliveryTime: timeArray }),
}));
