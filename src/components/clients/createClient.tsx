"use client";

import { SubmitHandler } from "react-hook-form";
import FormClients from "./formClients";

const FormCreateClient = () => {
  const onSubmit: SubmitHandler<ClientType> = (data) => {
    console.log(data);
  };

  return <FormClients onSubmit={onSubmit} mode="create" />;
};

export default FormCreateClient;
