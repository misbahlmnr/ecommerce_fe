import {
  Button,
  Field,
  FileUpload,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Modal } from "../Modal";
import { Props } from "./Types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormAddProductInput {
  name: string;
  price: string;
  description: string;
  image: any;
}

const schema = z.object({
  name: z.string().min(1, "Nama produk tidak boleh kosong"),
  price: z.string().min(1, "Harga produk tidak boleh kosong"),
  description: z.string().min(1, "Deskripsi produk tidak boleh kosong"),
  image: z.instanceof(File).refine((file) => file.size > 0, {
    message: "File is required",
  }),
});

export const FormAddProduct = (props: Props) => {
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAddProductInput>({
    resolver: zodResolver(schema),
  });

  const { isOpen, onClose, mode } = props;

  const onSubmit: SubmitHandler<FormAddProductInput> = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const getFormTitle = () => {
    switch (mode) {
      case "add":
        return "Form Add Product";
      case "edit":
        return "Form Edit Product";
      default:
        return "View Product";
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Stack>
        <Heading>{getFormTitle()}</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field.Root mb={3} invalid={!!errors.name}>
            <Field.Label>Nama Produk</Field.Label>
            <Input
              type="text"
              placeholder="Masukan Nama Produk"
              colorPalette="purple"
              readOnly={mode === "view"}
              {...register("name")}
            />
            {errors.name && (
              <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root mb={3} invalid={!!errors.price}>
            <Field.Label>Harga Produk</Field.Label>
            <Input
              type="text"
              placeholder="Masukan Harga Produk"
              colorPalette="purple"
              readOnly={mode === "view"}
              {...register("price")}
            />
            {errors.price && (
              <Field.ErrorText>{errors.price?.message}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root mb={3} invalid={!!errors.description}>
            <Field.Label>Deskripsi Produk</Field.Label>
            <Textarea
              placeholder="Masukan Deskripsi Produk"
              colorPalette="purple"
              readOnly={mode === "view"}
              {...register("description")}
            />
            {errors.description && (
              <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
            )}
          </Field.Root>

          {(mode === "view" || mode === "edit") && (
            <Stack
              maxW={"300px"}
              borderWidth={1}
              borderColor={"gray.200"}
              borderRadius={"md"}
              mb={5}
              p={2}
            >
              <Image
                rounded={"md"}
                src={
                  "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/11/18/bfe50eae-b84d-4288-8122-3504b4af908a.jpg"
                }
                alt="Product Image"
              />
            </Stack>
          )}

          {(mode === "add" || mode === "edit") && (
            <Field.Root mb={5} invalid={!!errors.image}>
              <Field.Label>Gambar Produk</Field.Label>
              <Controller
                name="image"
                control={control}
                rules={{ required: "File is required" }}
                render={({ field }) => (
                  <FileUpload.Root
                    accept={["image/png", "image/jpeg", "image/jpg"]}
                    onChange={(e) =>
                      field.onChange((e.target as HTMLInputElement)?.files?.[0])
                    }
                  >
                    <FileUpload.HiddenInput />
                    <FileUpload.Trigger asChild>
                      <Button variant="outline" size="sm">
                        <HiUpload /> Upload file
                      </Button>
                    </FileUpload.Trigger>
                    <FileUpload.List />
                  </FileUpload.Root>
                )}
              />
              {errors.image && (
                <Field.ErrorText>
                  {String(errors.image?.message)}
                </Field.ErrorText>
              )}
            </Field.Root>
          )}

          <HStack justifyContent={"flex-end"}>
            <Button colorPalette={"black"} onClick={handleClose}>
              {mode === "view" ? "Close" : "Batal"}
            </Button>
            {mode !== "view" && (
              <Button type="submit" colorPalette={"purple"}>
                {mode === "add" ? "Simpan" : "Edit"}
              </Button>
            )}
          </HStack>
        </form>
      </Stack>
    </Modal>
  );
};

export default FormAddProduct;
