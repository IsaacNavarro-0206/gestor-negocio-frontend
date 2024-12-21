"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import Combobox from "./combobox";
import { Input } from "../ui/input";
import { PlusIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";

const ArrayFields = () => {
  const {
    control,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<TransactionFormType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "transactionsDetails", // Esto debe coincidir con el esquema definido en yup
  });

  // Observamos todas las filas de "transactionsDetails" para saber qué productos están seleccionados
  const transactionsDetails = watch("transactionsDetails") || [];

  // Obtenemos una lista de todos los productos seleccionados
  const selectedProductIds = transactionsDetails
    .map((transactionDetail) => transactionDetail.productId)
    .filter(Boolean);

  return (
    <div>
      {/* Contenedor principal con scroll */}
      <div className="max-h-40 overflow-y-auto mb-4 border p-4 rounded">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className={`${
              index > 0 ? "sm:grid-cols-9" : "sm:grid-cols-8"
            } sm:grid gap-4 mb-4 flex flex-col`}
          >
            {/* Campo: Producto */}
            <div className="col-span-3">
              <Combobox
                options={[
                  { label: "Ron viejo de caldas", value: 1 },
                  { label: "Aguila negra", value: 2 },
                  { label: "Coronita", value: 3 },
                ]}
                placeholder="Selecciona Producto"
                onChange={(value) =>
                  setValue(`transactionsDetails.${index}.productId`, value)
                }
                value={watch(`transactionsDetails.${index}.productId`)}
                // Deshabilitar los productos que ya han sido seleccionados
                disabledOptions={selectedProductIds}
              />

              {errors.transactionsDetails?.[index]?.productId &&
                !watch(`transactionsDetails.${index}.productId`) && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.transactionsDetails[index].productId.message}
                  </p>
                )}
            </div>

            {/* Campo: Cantidad */}
            <div className="col-span-2">
              <Input
                id={`quantity-${index}`}
                placeholder="Cantidad"
                type="number"
                {...register(`transactionsDetails.${index}.quantity`)}
              />

              {errors.transactionsDetails?.[index]?.quantity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.transactionsDetails[index].quantity.message}
                </p>
              )}
            </div>

            {/* Campo: Precio */}
            <div className="col-span-2">
              <Input
                id={`price-${index}`}
                placeholder="Precio"
                type="number"
                {...register(`transactionsDetails.${index}.price`)}
              />

              {errors.transactionsDetails?.[index]?.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.transactionsDetails[index].price.message}
                </p>
              )}
            </div>

            {/* Botón para eliminar fila */}
            <div
              className={`${index > 0 ? "flex col-span-2 gap-3" : "col-span1"}`}
            >
              {/* Botón para eliminar fila */}
              {index > 0 && (
                <Button variant="ghost" onClick={() => remove(index)}>
                  <XIcon />
                </Button>
              )}

              {/* Botón para agregar nueva fila */}
              <Button
                onClick={() =>
                  append({
                    productId: undefined,
                    quantity: undefined,
                    price: undefined,
                  })
                }
              >
                <PlusIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayFields;
