"use client";

import { SubmitHandler } from "react-hook-form";
import FormSuppliers from "./formSuppliers";

const FormCreateSupplier = () => {
  const onSubmit: SubmitHandler<SupplierType> = (data) => {
    console.log(data);
  };

  return <FormSuppliers onSubmit={onSubmit} mode="create" />;
};

export default FormCreateSupplier;
