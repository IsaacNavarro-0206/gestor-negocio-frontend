"use client";

import { SubmitHandler } from "react-hook-form";
import FormProducts from "./formProducts";

type FormValues = {
  name: string;
  stock: number;
  category: string;
};

const FormCreateProduct = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return <FormProducts onSubmit={onSubmit} mode="create" />;
};

export default FormCreateProduct;
