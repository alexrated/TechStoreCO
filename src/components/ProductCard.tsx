/*
    Filename >>> ProductCard.tsx
    Author   >>> alexrated
    Date     >>> 21-07-2025
        This file contains the Product component to be render in App.tsx
        This component consist in a cart that shows a product's info
*/
import type { Dispatch } from "react"
import type { CartActions } from "../reducers/product-reducer"
import type { Product } from "../types"
import { formatCurrencyCol } from "../helpers"

type ProductCardProps = {
    product: Product,
    dispatch: Dispatch<CartActions>
}

function ProductCard({ product, dispatch }: ProductCardProps) {

    // Destructuring variables from object "product":
    const { name, image, description, price } = product

    return (
        <div className="flex flex-col -mx-3 justify-center items-center w-full bg-zinc-950 rounded-md">
            <div className="px-3">
                <img
                    className="w-[20rem] h-auto"
                    src={ `/img/${image}.png` }
                    alt="imagen del producto"
                />
            </div>

            <div className=" flex flex-col items-center justify-center gap-3 p-6 my-6">
                <h3 className="text-white text-3xl text-center font-black uppercase">{ name }</h3>
                <p className="text-white text-center">{ description }</p>
                <p className="text-rose-400 text-2xl font-black">{ formatCurrencyCol(price) }</p>
                <input
                    type="submit"
                    className="bg-violet-600 hover:bg-violet-800 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-md"
                    value={"Agregar al carrito"}
                    onClick={ () => dispatch({ type: 'add-to-cart', payload: { item: product } }) }
                />
            </div>
        </div>
    )
}
export default ProductCard