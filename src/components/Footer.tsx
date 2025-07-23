/*
    Filename >>> Footer.tsx
    Author   >>> alexrated
    Date     >>> 22-07-2025
        This file contains the Footer component to be render in App.tsx
        If we consider the current state of the app, theres is no need
        to write a separate component for the footer. This is mainly done 
        for possible future updates
*/

function Footer() {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-4">
                <div className="flex items-center justify-center md:space-x-2">
                    <a href="/index.html">
                        <img
                            src="/tech_cart_logo.svg"
                            alt="Store logo"
                            className="w-24 h-24 md:w-38 md:h-38 px-3"
                        />
                    </a>

                    <p className=" text-violet-600 font-black text-sm md:text-xl">
                        alexrated, 2025
                    </p>
                </div>
                <p className="text-white text-center text-sm m-4">
                    Esta página se escribió como un ejercicio de aprendizaje.
                    Las imágenes se usan como referencia y son absoluta propiedad de sus creadores.
                    No se atribuye uso con fines comerciales.
                </p>
            </div>
        </>
    )
}
export default Footer