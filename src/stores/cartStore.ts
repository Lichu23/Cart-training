import { create } from "zustand";
import { CartState, Product } from "../types/types";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

const storage = localStorage; // Or use sessionStorage if needed

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      cartItems: [],
      addItem: (product: Product) => {
        set((state) => {
          if (
            state.cartItems.findIndex((item) => item.id === product.id) === -1
          ) {
            return {
              cartItems: [...state.cartItems, product],
            };
          }
          return state;
        });
        toast.success("item added to cart successfully!");
      },
      clearCart: () => {
        set(() => ({
          cartItems: [],
        }));
        // Elimina los datos del localStorage
        storage.removeItem("cart");
        toast.success("THE CART WAS CLEANED CORRECTLY!");
      },
    }),
    {
      name: "cart",
    }
  )
);
