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

type TransactionType = {
  name: string;
  entityType: string;
  transactionType: string;
  productName: string;
  price: number;
  quantity: number;
  subTotal: number;
};

type TransactionFormType = {
  transactionType: string;
  entityType: string;
  entityId: number;
  transactionsDetails: TransactionDetailType[];
};

type TransactionDetailType = {
  productId: number;
  quantity: number;
  price: number;
};
