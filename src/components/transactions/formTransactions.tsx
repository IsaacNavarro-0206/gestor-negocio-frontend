import { FormProvider, useForm } from "react-hook-form";
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
import { SquarePenIcon } from "lucide-react";
import Combobox from "./combobox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ArrayFields from "./arrayFields";

// Esquema de validación con Yup
const schema = yup.object().shape({
  transactionType: yup.string().required("El nombre es obligatorio"),
  entityType: yup.string().required("El nombre es obligatorio"),
  entityId: yup
    .number()
    .required("El cliente/proveedor es obligatorio")
    .typeError("Debe ser un número válido"),
  transactionsDetails: yup
    .array()
    .of(
      yup.object().shape({
        productId: yup
          .number().nullable()
          .required("Producto es obligatorio")
          .typeError("Debe ser un número válido"),
        price: yup
          .number().nullable()
          .required("Precio es obligatorio")
          .typeError("Debe ser un número"),
        quantity: yup
          .number().nullable()
          .required("Cantidad es obligatoria")
          .typeError("Debe ser un número"),
      })
    )
    .required(),
});

type FormTransactionsProps = {
  initialValues?: TransactionFormType; // Valores iniciales para edición
  mode: "create" | "edit"; // Modo del formulario
  onSubmit: (data: TransactionFormType) => void; // Función para manejar el envío
};

const FormTransactions: React.FC<FormTransactionsProps> = ({
  initialValues = {
    transactionType: "",
    entityType: "",
    entityId: undefined,
    transactionsDetails: [
      {
        productId: undefined,
        price: undefined,
        quantity: undefined,
      },
    ],
  },
  mode = "create",
  onSubmit,
}) => {
  const methods = useForm<TransactionFormType>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = methods;

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
            "Crear Transacción"
          ) : (
            <SquarePenIcon color="orange" />
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[700px] w-11/12">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Nueva Transacción" : "Editar Transacción"}
          </DialogTitle>
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:grid sm:grid-cols-8 gap-4 py-4 flex flex-col">
              {/* Campo: Tipo transacción */}
              <div className="col-span-2">
                <Select
                  defaultValue={initialValues.transactionType || ""}
                  onValueChange={(value) => setValue("transactionType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo transacción" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="in">Entrada</SelectItem>
                    <SelectItem value="out">Salida</SelectItem>
                  </SelectContent>
                </Select>

                {errors.transactionType && !watch("transactionType") && (
                  <p className="text-red-500 text-sm mt-1 col-span-4">
                    {errors.transactionType.message}
                  </p>
                )}
              </div>

              {/* Campo: Tipo entidad */}
              <div className="col-span-2">
                <Select
                  defaultValue={initialValues.entityType || ""}
                  onValueChange={(value) => setValue("entityType", value)}
                >
                  <SelectTrigger className="">
                    <SelectValue placeholder="Tipo entidad" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="client">Cliente</SelectItem>
                    <SelectItem value="supplier">Proveedor</SelectItem>
                  </SelectContent>
                </Select>

                {errors.entityType && !watch("entityType") && (
                  <p className="text-red-500 text-sm mt-1 col-span-4">
                    {errors.entityType.message}
                  </p>
                )}
              </div>

              {/* Campo: Cliente/Proveedor */}
              <div className="col-span-4">
                <Combobox
                  options={[
                    { label: "El barba", value: 1 },
                    { label: "Bavaria", value: 2 },
                    { label: "Postobon", value: 3 },
                  ]}
                  placeholder="Selecciona Cliente/Proveedor"
                  onChange={(value) => setValue("entityId", value)}
                  value={watch("entityId")}
                />

                {errors.entityId && !watch("entityId") && (
                  <p className="text-red-500 text-sm mt-1 col-span-4">
                    {errors.entityId.message}
                  </p>
                )}
              </div>
            </div>

            <ArrayFields />

            <DialogFooter>
              <Button type="submit">
                {mode === "create" ? "Crear Transacción" : "Guardar Cambios"}
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default FormTransactions;
