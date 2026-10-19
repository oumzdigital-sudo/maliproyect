import { CurrencyCode } from '../types';

export const RATES: Record<CurrencyCode, number> = {
  XOF: 1,
  EUR: 1 / 655.957,
  USD: 1 / 610,
};

export const SYMBOLS: Record<CurrencyCode, string> = {
  XOF: 'FCFA',
  EUR: '€',
  USD: '$',
};

export function formatCurrency(amountInFCFA: number, currency: CurrencyCode = 'XOF'): string {
  if (currency === 'XOF') {
    return `${new Intl.NumberFormat('fr-FR').format(Math.round(amountInFCFA))} FCFA`;
  }
  
  const converted = amountInFCFA * RATES[currency];
  if (currency === 'EUR') {
    return `${new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(Math.round(converted))} €`;
  }
  return `$${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Math.round(converted))}`;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('fr-FR').format(num);
}

export function generateWhatsAppLink(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
