export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Next Js E-Commerce';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A modern store built with Next.js';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 3;

export const signInDefaultValues = {
    email: 'admin@example.com',
    password: '123456',
};

export const signUpDefaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export const shippingAddressDefaultValues = {
    fullName: 'John Doe',
    streetAddress: '123 Main st',
    city: 'Anytown',
    postalCode: '12345',
    country: 'USA',
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
    ? process.env.PAYMENT_METHODS.split(', ')
    : ['PayPal', 'Stripe', 'CashOnDelivery'];

export const DEFAULT_PAYMENT_METHOD =
    process.env.DEFAULT_PAYMENT_METHOD || 'PayPal';
