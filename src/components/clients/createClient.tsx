"use client";

import { SubmitHandler } from "react-hook-form";
import FormClients from "./formClients";

type FormValues = {
  name: string;
  email?: string;
  phone: string;
  address: string;
};

const FormCreateClient = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return <FormClients onSubmit={onSubmit} mode="create" />;
};

export default FormCreateClient;
