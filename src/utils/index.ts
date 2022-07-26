export function currencyMask(value: number) {
  const formatter = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(value);
}
