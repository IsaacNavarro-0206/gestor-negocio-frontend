type CategoryType = {
  name: string;
};

type ClientType = {
  name: string;
  email?: string;
  phone: string;
  address: string;
};

type ProductType = {
  name: string;
  stock: number;
  category: string;
};

type SupplierType = {
  name: string;
  contact: string;
};
