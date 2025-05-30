import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  role?: "alertdialog" | "dialog";
};
