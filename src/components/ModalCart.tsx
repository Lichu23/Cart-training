import { ShoppingCart } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { useCartStore } from "../stores/cartStore";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCart() {
  const [open, setOpen] = React.useState<boolean>(false);
  const { cartItems, clearCart, addItem, removeItem, decreaseItemQuantity } =
    useCartStore();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <ShoppingCart />{cartItems.length}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"List Cart Items"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {cartItems.length === 0 ? (
              <p>No hay elementos en el carrito</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.title} - ${item.price}
                      <Button onClick={() => addItem(item)}>+</Button>
                      {item?.quantity}
                      {item.quantity >= 1 ? (
                        <Button onClick={() => decreaseItemQuantity(item.id)}>
                          -
                        </Button>
                      ) : (
                        <Button onClick={() => removeItem(item.id)}>
                          clear
                        </Button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Pay</Button>
          <Button onClick={() => clearCart()}>Clear Cart</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
