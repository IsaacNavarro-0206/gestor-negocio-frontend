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
import { SquarePenIcon } from "lucide-react";

// Esquema de validación con Yup
const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  contact: yup.string().required("El nombre es obligatorio"),
});

type FormSuppliersProps = {
  initialValues?: SupplierType; // Valores iniciales para edición
  mode: "create" | "edit"; // Modo del formulario
  onSubmit: (data: SupplierType) => void; // Función para manejar el envío
};

const FormSuppliers: React.FC<FormSuppliersProps> = ({
  initialValues = { name: "", contact: "" },
  mode = "create",
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SupplierType>({
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
          className={`${mode === "create" ? "bg-black text-white" : ""}`}
          variant={`${mode === "create" ? "default" : "ghost"}`}
        >
          {mode === "create" ? (
            "Crear Proveedor"
          ) : (
            <SquarePenIcon color="orange" />
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] w-11/12">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Nuevo Proveedor" : "Editar Proveedor"}
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

            {/* Campo: Contacto */}
            <div className="grid grid-cols-4">
              <Input
                id="contact"
                placeholder="Contacto"
                className="col-span-4"
                {...register("contact")}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1 col-span-4">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">
              {mode === "create" ? "Crear Proveedor" : "Guardar Cambios"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormSuppliers;
