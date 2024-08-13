import { Toaster } from "react-hot-toast";
import "./App.css";
import ItemList from "./components/ItemList";
import ModalCart from "./components/ModalCart";

function App() {
  return (
    <main>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div>
        <ModalCart />
        <ItemList />
      </div>
    </main>
  );
}

export default App;
