"use client";

import { SubmitHandler } from "react-hook-form";
import FormSuppliers from "./formSuppliers";

interface FormEditSupplierProps {
  data: SupplierType;
}

const FormEditSupplier = ({ data }: FormEditSupplierProps) => {
  const onSubmit: SubmitHandler<SupplierType> = (data) => {
    console.log(data);
  };

  return <FormSuppliers onSubmit={onSubmit} mode="edit" initialValues={data} />;
};

export default FormEditSupplier;
