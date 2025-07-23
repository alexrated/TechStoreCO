/*
    Filename >>> App.tsx
    Author   >>> alexrated
    Date     >>> 20-07-2025
        This file contains the app to be render in main.tsx
        This uncomplex proyect is written as a studying excersise; 
        specifically, a shopping cart
*/
import { useEffect, useReducer } from "react"
import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import Footer from "./components/Footer"
import { cartReducer, initialState } from "./reducers/product-reducer"

function App() {

    // Reducer for managing logic and states:
    const [ state, dispatch ] = useReducer(cartReducer, initialState)
    
    // Saving data in local storage. useEffect needed to prevent asynchronous nature of state:
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <>
            {/* Header component consist in a background image, a logo and a shopping cart */}
            <Header
                cart={ state.cart }
                dispatch={ dispatch }
            />

            {/* Main section. A title and a grid of product card components: */}
            <main className="mt-10 md:mt-12 w-[90%] md:max-w-6xl mx-8 md:mx-auto">
                <h2 className="text-5xl text-center text-violet-600 font-bold">
                   Nuestros Productos 
                </h2>
                {/* Grid of product cards: */}
                <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6">
                    {state.data.map((product) => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            dispatch={ dispatch }
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}
export default App