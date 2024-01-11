import { create } from "zustand";

interface PositionStore {
  latitude: number | undefined;
  longitude: number | undefined;
  setPosition: (lat: number, long: number) => void;
}

const usePosition = create<PositionStore>((set) => ({
  latitude: undefined,
  longitude: undefined,
  setPosition: (lat, long) => set({ latitude: lat, longitude: long }),
}));

export default usePosition;
