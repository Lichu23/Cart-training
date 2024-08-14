import { create } from "zustand";
import { CartState, Product } from "../types/types";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

const storage = localStorage; // Or use sessionStorage if needed

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addItem: (product: Product) => {
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            // If product exists, increase quantity
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            // If product doesn't exist, add it with quantity 1
            return {
              cartItems: [...state.cartItems, { ...product, quantity: 1 }],
            };
          }
        });
      },
      decreaseItemQuantity: (productId: number) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
              : item
          ),
        }));
      },
      removeItem: (productId: number) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        }));
      },
      updateItemQuantity: (productId: number, newQuantity: number) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          ),
        }));
      },
      clearCart: () => {
        set(() => ({ cartItems: [] }));
        storage.removeItem("cart");
        toast.success("El carrito se vació correctamente"); // Success message
      },
    }),
    {
      name: "cart",
    }
  )
);

// export const useCartStore = create(
//   persist<CartState>(
//     (set) => ({
//       cartItems: [],
//       addItem: (product: Product) => {
//         set((state) => {
//           const existingItem = state.cartItems.find((item) => item.id === product.id);

//           if (
//             state.cartItems.findIndex((item) => item.id === product.id) === -1
//           ) {
//             return {
//               cartItems: [...state.cartItems, product],
//             };
//           }
//           return state;
//         });
//         toast.success("item added to cart successfully!");
//       },
//       clearCart: () => {
//         set(() => ({
//           cartItems: [],
//         }));
//         // Elimina los datos del localStorage
//         storage.removeItem("cart");
//         toast.success("the cart was cleaned correctly!");
//       },
//     }),
//     {
//       name: "cart",
//     }
//   )
// );
