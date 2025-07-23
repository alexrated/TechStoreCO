/*
    Filename >>> index.ts (for custom types)
    Author   >>> alexrated
    Date     >>> 20-07-2025
        This file contains custom types for TypeScript operations
*/

// Custom type for a product object:
export type Product = {
    id: number,
    name: string,
    image: string,
    price: number,
    description: string
}

// Adding a quantity property to product objects. This is done to give the user
// the posibility to order more than one item of a product that has already been
// added to the cart:
export type CartItem = Product & {
    quantity: number
}

// Custom -lookup- type for id related operations:
export type ProductID = Product['id']