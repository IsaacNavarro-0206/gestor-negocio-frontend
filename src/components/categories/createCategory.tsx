"use client";

import { SubmitHandler } from "react-hook-form";
import FormCategories from "./formCategories";

const FormCreateCategory = () => {
  const onSubmit: SubmitHandler<CategoryType> = (data) => {
    console.log(data);
  };

  return <FormCategories onSubmit={onSubmit} mode="create" />;
};

export default FormCreateCategory;
