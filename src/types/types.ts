export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface ShopState {
  list: Product[];
  setList: (newList: Product[]) => void;
}

export interface CartState {
  cartItems: Product[];
  addItem: (product: Product) => void;
  clearCart: () => void;
}
