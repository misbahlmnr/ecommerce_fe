export type Props = {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit" | "view";
};
