/*
    Filename >>> product-reducer.ts
    Author   >>> alexrated
    Date     >>> 21-07-2025
        This file contains the reducer to manage the logic for the app
*/
import { productDB } from "../data/productDB"
import type { Product, CartItem, ProductID } from "../types"

// Actions to be dispatch:
export type CartActions =
    { type: 'add-to-cart',       payload: { item: Product } } |
    { type: 'remove-from-cart',  payload: { id: ProductID } } |
    { type: 'decrease-quantity', payload: { id: ProductID } } |
    { type: 'increase-quantity', payload: { id: ProductID } } |
    { type: 'clean-cart' }

// As an initial state, we need a custom type of empty arrays for products and items in shopping car:
export type CartState = {
    data: Product[],
    cart: CartItem[]
}

// Looking if there is data saved in local storage (it has to be an array of cart items):
const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

// Cart's initial state (CartState's type):
export const initialState: CartState = {
    data: productDB,
    cart: initialCart()
}

// Global variables to stablish min and max limits for items to add to car:
const MIN_ITEMS = 1 
const MAX_ITEMS = 5

// Our reducer takes the initial state and the actions to be dispatch:
export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    // Adding a product item to the cart:
    if (action.type === 'add-to-cart') {
        let updatedCart: CartItem[] = []

        // looking if an item has already been added to cart:
        const productExists = state.cart.find(product => product.id === action.payload.item.id)

        // IF PRODUCT WAS ALREADY ADDED TO THE CART ARRAY, YOU JUST UPDATE ITS QUANTITY:
        if (productExists) {
            updatedCart = state.cart.map(product => {
                // Checking if ids match:
                if (product.id === action.payload.item.id) {
                    // Checking if quantity is less than max quantity allowed per costumer:
                    if (product.quantity < MAX_ITEMS) {
                        return { ...product, quantity: product.quantity + 1 }
                    }
                    else {
                        return product
                    }
                }
                else {
                    return product
                }
            })
        }
        // IF NOT, ADD THE NEW PRODUCT:
        else {
            const newProduct: CartItem = { ...action.payload.item, quantity: 1 }
            updatedCart = [...state.cart, newProduct]
        }
        return {
            ...state,
            cart: updatedCart
        }
    }

    // Removing a product item from the cart:
    if (action.type === 'remove-from-cart') {
        const cart = state.cart.filter(product => product.id !== action.payload.id)
        return {
            ...state,
            cart
        }
    }

    // Decreasing an item's quantity in the cart. Cannot be less than 1:
    if (action.type === 'decrease-quantity') {
        const cart = state.cart.map(product => {
            if (product.id === action.payload.id && product.quantity > MIN_ITEMS) {
                return { ...product, quantity: product.quantity - 1 }
            }
            return product
        })
        return {
            ...state,
            cart
        }
    }
    
    // Increasing an item's quantity in the cart. Cannot be more than 5:
    if (action.type === 'increase-quantity') {
        const cart = state.cart.map(product => {
            if (product.id === action.payload.id && product.quantity < MAX_ITEMS) {
                return { ...product, quantity: product.quantity + 1 }
            }
            return product
        })
        return {
            ...state,
            cart
        }
    }

    // Cleaning the cart:
    if (action.type === 'clean-cart') {
        return {
            ...state,
            cart: []
        }
    }
    return state
}