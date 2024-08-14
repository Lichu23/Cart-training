import { create } from "zustand";
import { Product, ShopState } from "../types/types";

export const useListStore = create<ShopState>((set) => ({
  list: [],
  search: "",
  setList: (newList: Product[]) => set({ list: newList }),
  setSearch: (newSearch: string) => set({ search: newSearch }),
}));
