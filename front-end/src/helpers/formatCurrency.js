const formatCurrency = (number) => {
  const fmt = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return fmt.format(number);
};

export default formatCurrency;
