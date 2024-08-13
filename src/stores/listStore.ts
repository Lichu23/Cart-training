import { create } from "zustand";
import { ShopState, Product } from "../types/types";


export const useListStore = create<ShopState>((set) => ({
  list: [],
  setList: (newList: Product[]) => set({ list: newList }),
}));
