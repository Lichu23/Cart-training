import { Toaster } from "react-hot-toast";
import "./App.css";
import ItemList from "./components/ItemList";
import ModalCart from "./components/ModalCart";

function App() {
  return (
    <main className="container">
      <Toaster position="top-center" reverseOrder={false} />

      <ModalCart />
      <ItemList />
    </main>
  );
}

export default App;
