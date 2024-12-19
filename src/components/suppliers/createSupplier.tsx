"use client";

import { SubmitHandler } from "react-hook-form";
import FormSuppliers from "./formSuppliers";

type FormValues = {
  name: string;
  contact: string;
};

const FormCreateSupplier = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return <FormSuppliers onSubmit={onSubmit} mode="create" />;
};

export default FormCreateSupplier;
