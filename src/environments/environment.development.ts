export const environment = {
  company: {
    name: 'Ortogoloso Srl',
    VATCode: '12345678910',
  },
  invoicesOptions: {
    ivaPercentage: 10,
    paymentModes: [
      {
        code: 'bonifico',
        label: 'Bonifico bancario',
      },
      {
        code: 'credit-card',
        label: 'Carta di credito',
      },
    ],
    paymentSolutions: [
      {
        code: 'unica',
        label: 'Soluzione unica',
      },
      {
        code: 'rate',
        label: 'Rate',
      },
    ],
  },
};
