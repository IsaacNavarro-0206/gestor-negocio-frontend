"use client";

import FormCreateProduct from "app/components/products/createProducts";
import TableProducts from "app/components/products/tableProducts";

const Products = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Productos</h1>

        <FormCreateProduct />
      </div>

      <TableProducts />
    </div>
  );
};

export default Products;
