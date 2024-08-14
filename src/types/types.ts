export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export interface ShopState {
  list: Product[];
  search: string;
  setList: (newList: Product[]) => void;
  setSearch: (newSearch: string) => void;
}
export interface CartItem extends Product {
  quantity: number;
}
export interface CartState {
  cartItems: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateItemQuantity: (id: number, newQuantity: number) => void;
  clearCart: () => void;
  decreaseItemQuantity: (id: number) => void;
}
