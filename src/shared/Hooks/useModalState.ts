import { useCallback, useState } from "react";

const useModalState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useModalState;
