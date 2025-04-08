import { ColumnDef } from "@tanstack/react-table";

export type Props<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  onEdit?: (row: T) => void;
  onView?: (row: T) => void;
  onDelete?: (row: T) => void;
};
