import { Product } from "./types/types";

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "TV 55 pulgadas",
    description: "TV 55 pulgadas, curva, marca gonzung",
    price: 1000,
  },
  {
    id: 2,
    title: "Webcam para streams",
    description: "Webcam marca logitency",
    price: 200,
  },
  {
    id: 3,
    title: "Celular gama alta",
    description: "Celular gama alta, marca xiaoncy",
    price: 300,
  },
  {
    id: 4,
    title: "Dron profesional",
    description: "Dron que soporta fuertes vientos, marca phantoncy",
    price: 500,
  },
  {
    id: 5,
    title: "Ventilador de escritorio",
    description: "Ventilador portable de escritorio, marca liliancy",
    price: 50,
  },
];

const api = {
  getProducts: (): Promise<Product[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(PRODUCTS), 500));
  },
};

export default api;
