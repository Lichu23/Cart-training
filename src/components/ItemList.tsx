import { AddShoppingCart } from "@mui/icons-material/";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import api from "../api";
import { useCartStore } from "../stores/cartStore";
import { useListStore } from "../stores/listStore";
import Input from "./Input";

const ItemList = () => {
  const { list, setList, search } = useListStore();

  const { addItem } = useCartStore();

  useEffect(() => {
    api.search(search).then(setList);
  }, [search]);

  return (
    <main className="mainListItem">
      <Input/>
      <ul>
        {list.length === 0 ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            <HourglassEmptyIcon />
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
