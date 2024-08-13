import "./App.css";
import ItemList from "./components/ItemList";
import { ModalCart } from "./components/ModalCart";

function App() {
  return (
    <main>
      <div>
        <ModalCart />
        <ItemList />
      </div>
    </main>
  );
}

export default App;
