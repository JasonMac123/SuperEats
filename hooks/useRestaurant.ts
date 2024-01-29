import { create } from "zustand";

interface RestaurantStore {
  fee: number;
  deliveryTime: Array<number>;
  restaurantOrderName: string;
  setFee: (fee: number) => void;
  setTime: (timeArray: Array<number>) => void;
  setRestaurantOrderName: (name: string) => void;
}

export const useRestaurant = create<RestaurantStore>((set) => ({
  fee: 0,
  deliveryTime: [],
  restaurantOrderName: "",
  setFee: (fee) => set({ fee }),
  setTime: (timeArray) => set({ deliveryTime: timeArray }),
  setRestaurantOrderName: (name) => set({ restaurantOrderName: name }),
}));
