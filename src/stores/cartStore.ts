import { create } from 'zustand';
import { CartState, Product } from '../types/types';


export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addItem: (product: Product) => {
    set((state) => {
      if (state.cartItems.findIndex((item) => item.id === product.id) === -1) {
        return {
          cartItems: [...state.cartItems, product],
        };
      }
      return state;
    });
  },
  clearCart: () => {
    set(() => ({
      cartItems:[]
    }))
  }
}));

