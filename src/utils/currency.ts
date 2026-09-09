/**
 * Centralized currency formatting for ECLAT
 * Standardizes all pricing displays across product catalog, bag, and details.
 */

export function formatPKR(amount: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(amount);
}

// Alternative compact or clean format: "PKR 18,500"
export function formatPrice(amount: number): string {
  return `PKR ${amount.toLocaleString('en-US')}`;
}
