"use client";

import { SubmitHandler } from "react-hook-form";
import FormSuppliers from "./formSuppliers";

type FormValues = {
  name: string;
  contact: string;
};

interface FormEditSupplierProps {
  data: FormValues;
}

const FormEditSupplier = ({ data }: FormEditSupplierProps) => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return <FormSuppliers onSubmit={onSubmit} mode="edit" initialValues={data} />;
};

export default FormEditSupplier;
