import { useState } from "react";
import { ModalCart } from "./ItemList";

export function Modal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Ver carrito</button>
      <ModalCart isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}
