import { clsx } from 'clsx';
export const cn = (...inputs) => clsx(inputs);
export const currency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
