"use client";

import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { Props } from "./Types";

const Modal = (props: Props) => {
  const { children, isOpen, onClose } = props;

  return (
    <Dialog.Root lazyMount open={isOpen} onOpenChange={onClose} size={"lg"}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
            <Dialog.Body pt={5}>{children}</Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
