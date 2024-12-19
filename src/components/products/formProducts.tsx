import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SquarePenIcon } from "lucide-react";

// Esquema de validación con Yup
const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  stock: yup
    .number()
    .typeError("El stock debe ser un número")
    .positive("El stock debe ser mayor a 0")
    .integer("El stock debe ser un número entero")
    .required("El stock es obligatorio"),
  category: yup.string().required("La categoría es obligatoria"),
});

type FormValues = {
  name: string;
  stock: number;
  category: string;
};

type FormCreateProductProps = {
  initialValues?: FormValues; // Valores iniciales para edición
  mode: "create" | "edit"; // Modo del formulario
  onSubmit: (data: FormValues) => void; // Función para manejar el envío
};

const GenericForm: React.FC<FormCreateProductProps> = ({
  initialValues = { name: "", stock: 0, category: "" },
  mode = "create",
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: "onChange",
  });

  // Resetea los valores iniciales al abrir el formulario
  const handleOpenChange = () => reset(initialValues);

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          className={`${
            mode === "create" ? "bg-black text-white" : ""
          }`}
          variant={`${mode === "create" ? "default" : "ghost"}`}
        >
          {mode === "create" ? (
            "Crear Producto"
          ) : (
            <SquarePenIcon color="orange" />
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] w-11/12">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Nuevo Producto" : "Editar Producto"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            {/* Campo: Nombre */}
            <div className="grid grid-cols-4">
              <Input
                id="name"
                placeholder="Nombre"
                className="col-span-4"
                {...register("name")}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1 col-span-4">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Campo: Stock */}
            <div className="grid grid-cols-4">
              <Input
                id="stock"
                placeholder="Stock"
                className="col-span-4"
                type="number"
                {...register("stock")}
              />

              {errors.stock && (
                <p className="text-red-500 text-sm mt-1 col-span-4">
                  {errors.stock.message}
                </p>
              )}
            </div>

            {/* Campo: Categoría */}
            <div className="grid grid-cols-4">
              <Select
                defaultValue={initialValues.category || ""}
                onValueChange={(value) => setValue("category", value)}
              >
                <SelectTrigger className="col-span-4">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Ron">Ron</SelectItem>
                  <SelectItem value="Whisky">Whisky</SelectItem>
                  <SelectItem value="Cerveza botella">Cerveza botella</SelectItem>
                  <SelectItem value="Cerveza lata">Cerveza lata</SelectItem>
                  <SelectItem value="Tequila">Tequila</SelectItem>
                  <SelectItem value="Aguardiente">Aguardiente</SelectItem>
                </SelectContent>
              </Select>

              {errors.category && !watch("category") && (
                <p className="text-red-500 text-sm mt-1 col-span-4">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">
              {mode === "create" ? "Crear Producto" : "Guardar Cambios"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GenericForm;
