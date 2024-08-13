import { AddShoppingCart } from "@mui/icons-material/";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import api from "../api";
import { useListStore } from "../stores/listStore";
import { useCartStore } from "../stores/cartStore";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const ItemList = () => {
  const { list, setList } = useListStore();

  const {addItem} = useCartStore();


  useEffect(() => {
    api.getProducts().then(setList);
  }, []);

  return (
    <main className="mainListItem">
      <ul>
        {list.length === 0 ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            <HourglassEmptyIcon/>
            Cargando Items...
          </p>
        ) : (
          list.map((item) => (
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.id}
            >
              {item.title} - ${item.price}
              <IconButton onClick={() => addItem(item)} color="primary">
                <AddShoppingCart />
              </IconButton>
            </li>
          ))
        )}
      </ul>
    </main>
  );
};

export default ItemList;
