"use client";

import FormCreateCategory from "app/components/categories/createCategory";
import TableCategories from "app/components/categories/tableCategories";

const Products = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Categorías</h1>

        <FormCreateCategory />
      </div>

      <TableCategories />
    </div>
  );
};

export default Products;
