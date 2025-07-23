/*
    Filename >>> Header.tsx
    Author   >>> alexrated
    Date     >>> 21-07-2025
        This file contains the Header component to be render in App.tsx
        The header consist in a background image, a logo and a shopping cart
*/
import type { Dispatch } from "react";
import type { CartItem } from "../types";
import type { CartActions } from "../reducers/product-reducer";
import { MinusCircleIcon, PlusCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { useMemo, useState, useEffect, useRef } from "react";
import { formatCurrencyCol } from "../helpers";

type HeaderProps = {
    cart: CartItem[];
    dispatch: Dispatch<CartActions>;
};

function Header({ cart, dispatch }: HeaderProps) {

    // state for cart open or close when user hits shopping cart image:
    const [cartOpen, setCartOpen] = useState(false);

    // We want the user to have the possibility of closing the cart table 
    // hitting in any place of the screen or pressing "esc" key:
    const cartRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
                setCartOpen(false)
            }
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setCartOpen(false)
            }
        }

        if (cartOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleKeyDown)
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [cartOpen] )

    // Derived state:
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(
        () =>
            cart.reduce((total, item) => total + item.quantity * item.price, 0),
        [cart]
    );

    return (
        <>
            <div className="relative w-[90%] max-w-5xl mx-auto h-64">
                {/* Background image with opacity: */}
                <div className="absolute inset-0 bg-[url(/img/air75he.png)] bg-cover bg-left opacity-20 z-0" />
                {/* Content over the backgroud: */}
                <div className="relative z-10 h-full flex flex-col md:flex-row md:justify-between items-center md:pl-6">
                    <div className="flex flex-row items-center md:space-x-2">
                        <a href="/index.html">
                            <img
                                src="/tech_cart_logo.svg"
                                alt="Store logo"
                                className="w-24 h-24 md:w-38 md:h-38 px-3"
                            />
                        </a>

                        <p className=" text-violet-600 font-black text-3xl md:text-5xl">
                            TechStoreCO
                        </p>
                    </div>

                    {/* Shopping cart icon and hidden table:  */}
                    <div className="relative inline-block mt-4 md:mt-0 cursor-pointer" ref={ cartRef }>
                        <img
                            src="/carrito_compras.svg"
                            alt="Imagen carrito de compras"
                            className="w-18 h-18"
                            onClick={() => setCartOpen(!cartOpen)}
                        />
                        {cartOpen && (
                            /* Table. If need to return to hover, insert classes hidden and group-hover:block */
                            <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 top-full mt-2 bg-zinc-900 shadow-lg p-2 rounded-lg">
                                {/* if cart is empty, show warning: */}
                                {isEmpty ? (
                                    <p className="text-center text-white min-w-[15rem]">
                                        Tu carrito está vacío
                                    </p>
                                ) : (
                                    // if not empty, show table:
                                    <div className="max-w-[28rem] overflow-auto text-xs p-4">
                                        <table className="w-full table-fixed text-white">
                                            <thead>
                                                <tr className="text-left">
                                                    <th className="w-20">
                                                        Imagen
                                                    </th>
                                                    <th className="w-28">
                                                        Nombre
                                                    </th>
                                                    <th className="w-24">
                                                        Precio
                                                    </th>
                                                    <th className="w-18">
                                                        Cantidad
                                                    </th>
                                                    <th className="w-8"></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cart.map((product) => (
                                                    <tr
                                                        key={product.id}
                                                        className=""
                                                    >
                                                        <td>
                                                            <img
                                                                className="w-12 h-auto"
                                                                src={`/img/${product.image}.png`}
                                                                alt="Imagen de un producto"
                                                            />
                                                        </td>
                                                        <td>{product.name}</td>
                                                        <td className="font-black">{`${formatCurrencyCol(product.price)}`}</td>
                                                        <td>
                                                            <div className="flex items-center gap-1">
                                                                <button
                                                                    type="button"
                                                                    onClick={ () => dispatch({ type: "decrease-quantity", payload: { id: product.id } }) }
                                                                >
                                                                    <MinusCircleIcon className="h-4 w-4 text-violet-600 cursor-pointer" />
                                                                </button>

                                                                {
                                                                    product.quantity
                                                                }

                                                                <button
                                                                    type="button"
                                                                    onClick={ () => dispatch({ type: "increase-quantity", payload: { id: product.id } }) }
                                                                >
                                                                    <PlusCircleIcon className="h-4 w-4 text-violet-600 cursor-pointer" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    type="button"
                                                                    onClick={ () => dispatch({ type: "remove-from-cart", payload: { id: product.id } }) }
                                                                >
                                                                    <XCircleIcon className="h-4 w-4 text-red-500 cursor-pointer" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <p className="text-center text-white text-lg m-6">
                                            Total a pagar: {`${" "}`}
                                            <span className="font-black text-white text-xl">
                                                { `${formatCurrencyCol(cartTotal)}` }
                                            </span>
                                        </p>
                                        <button
                                            type="button"
                                            title="Vaciar carrito"
                                            className="bg-violet-600 hover:bg-violet-800 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-md"
                                            onClick={ () => dispatch({ type: "clean-cart" }) }
                                        >
                                            Vaciar el carrito
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;