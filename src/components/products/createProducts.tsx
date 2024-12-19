"use client";

import { SubmitHandler } from "react-hook-form";
import FormProducts from "./formProducts";

const FormCreateProduct = () => {
  const onSubmit: SubmitHandler<ProductType> = (data) => {
    console.log(data);
  };

  return <FormProducts onSubmit={onSubmit} mode="create" />;
};

export default FormCreateProduct;
