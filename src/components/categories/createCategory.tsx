"use client";

import { SubmitHandler } from "react-hook-form";
import FormCategories from "./formCategories";

type FormValues = {
  name: string;
};

const FormCreateCategory = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return <FormCategories onSubmit={onSubmit} mode="create" />;
};

export default FormCreateCategory;
