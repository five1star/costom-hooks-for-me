import { useState } from "react";

const useLocalModal = (initial: boolean) => {
  const [open, setOpen] = useState(initial);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return [open, openModal, closeModal] as const;
};

export default useLocalModal;
