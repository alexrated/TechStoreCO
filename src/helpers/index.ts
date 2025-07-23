/*
    Filename >>> index.ts (from helpers directory)
    Author   >>> alexrated
    Date     >>> 22-07-2025
        This file contains helper functions to perform some operations throught the app
*/

// Helper function to format to US dollars:
export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: quantity % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
    }).format(quantity);
}

// Helper function to format a number to COP (Colombian Pesos)
export function formatCurrencyCol(quantity: number) {
    return new Intl.NumberFormat('es-CO',
        {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }
    ).format(quantity)
}