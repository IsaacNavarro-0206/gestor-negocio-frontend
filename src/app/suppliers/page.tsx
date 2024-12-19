"use client";

import FormCreateSupplier from "app/components/suppliers/createSupplier";
import TableSuppliers from "app/components/suppliers/tableSuppliers";

const Suppliers = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Proveedores</h1>

        <FormCreateSupplier />
      </div>

      <TableSuppliers />
    </div>
  );
};

export default Suppliers;
