import { create } from "zustand";
import { CartState, Product } from "../types/types";
import { persist } from "zustand/middleware";

const storage = localStorage; // Or use sessionStorage if needed

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
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
          cartItems: [],
        }))
        // Elimina los datos del localStorage
        storage.removeItem('cart');
      },
    }),
    {
      name: 'cart',
    }
  )
);
