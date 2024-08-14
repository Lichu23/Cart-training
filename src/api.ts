import { Product } from "./types/types";

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "TV 55 pulgadas",
    description: "TV 55 pulgadas, curva, marca gonzung",
    price: 1000,
    quantity: 1,
  },
  {
    id: 2,
    title: "Webcam para streams",
    description: "Webcam marca logitency",
    price: 200,
    quantity: 1,
  },
  {
    id: 3,
    title: "Celular gama alta",
    description: "Celular gama alta, marca xiaoncy",
    price: 300,
    quantity: 1,
  },
  {
    id: 4,
    title: "Dron profesional",
    description: "Dron que soporta fuertes vientos, marca phantoncy",
    price: 500,
    quantity: 1,
  },
  {
    id: 5,
    title: "Ventilador de escritorio",
    description: "Ventilador portable de escritorio, marca liliancy",
    price: 50,
    quantity: 1,
  },
];

const api = {
  search: (search?: string): Promise<Product[]> => {
    let results = PRODUCTS;

    if (search) {
      const resultsLowerCase = search.toLowerCase()
      results = results.filter((product) => {
        return product.title.toLowerCase().includes(resultsLowerCase);
      });
    }
    return new Promise((resolve) => setTimeout(() => resolve(results), 500));
  },
};

export default api;
