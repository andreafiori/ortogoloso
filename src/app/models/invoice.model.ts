export interface InvoiceProduct {
  amount: number;
  description: string;
  paymentSolution: string;
  paymentMode: string;
};

export interface Invoice {
  number: number;
  date: string;
  year: string;
  clientName: string;
  clientVAT: string;
  total: number;
  products: InvoiceProduct[],
};