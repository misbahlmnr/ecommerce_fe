import {
  Button,
  Field,
  FileUpload,
  Heading,
  HStack,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Modal } from "../Modal";
import { Props } from "./Types";
import { HiUpload } from "react-icons/hi";

export const FormAddProduct = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Stack>
        <Heading>Form Add Product</Heading>
        <form>
          <Field.Root mb={3}>
            <Field.Label>Nama Produk</Field.Label>
            <Input
              type="text"
              placeholder="Masukan Nama Produk"
              colorPalette="purple"
            />
          </Field.Root>

          <Field.Root mb={3}>
            <Field.Label>Harga Produk</Field.Label>
            <Input
              type="text"
              placeholder="Masukan Harga Produk"
              colorPalette="purple"
            />
          </Field.Root>

          <Field.Root mb={3}>
            <Field.Label>Deskripsi Produk</Field.Label>
            <Textarea
              placeholder="Masukan Deskripsi Produk"
              colorPalette="purple"
            />
          </Field.Root>

          <Field.Root mb={5}>
            <Field.Label>Gambar Produk</Field.Label>
            <FileUpload.Root accept={["image/png"]}>
              <FileUpload.HiddenInput />
              <FileUpload.Trigger asChild>
                <Button variant="outline" size="sm">
                  <HiUpload /> Upload file
                </Button>
              </FileUpload.Trigger>
              <FileUpload.List />
            </FileUpload.Root>
          </Field.Root>

          <HStack justifyContent={"flex-end"}>
            <Button colorPalette={"black"} onClick={onClose}>
              Batal
            </Button>
            <Button type="submit" colorPalette={"purple"}>
              Simpan
            </Button>
          </HStack>
        </form>
      </Stack>
    </Modal>
  );
};

export default FormAddProduct;
