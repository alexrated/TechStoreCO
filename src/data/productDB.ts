/*
    Filename >>> productDB.ts
    Author   >>> alexrated
    Date     >>> 20-07-2025
        This file contains an array of Product objects as a database for the app 
*/
import type { Product } from "../types";

export const productDB: Product[] = [
    {
        id: 1,
        name: "Nuphy Air 75HE",
        image: "air75",
        price: 970000,
        description: "Teclado mecánico con switches HE de presión personalizable",
    },
    {
        id: 2,
        name: "Nuphy Air 75V2",
        image: "air75he",
        price: 809000,
        description: "Teclado mecánico de bajo perfil al 75% con switches wisteria pro",
    },
    {
        id: 3,
        name: "Nuphy Halo 65",
        image: "halo65",
        price: 769000,
        description: "Teclado con un layout del 65% y switches HE de presión variable",
    },
    {
        id: 4,
        name: "Redragon Kumara K552",
        image: "kumara",
        price: 199900,
        description: "Teclado gamer de precio asequible, switches mecánicos y RGB",
    },
    {
        id: 5,
        name: "Logitech MX Keys Mini",
        image: "mx_mini",
        price: 439900,
        description: "Teclado minimalista que maximiza la accesibilidad de cada tecla",
    },
    {
        id: 6,
        name: "Logitech Pebble Keys 2",
        image: "pebble",
        price: 169900,
        description: "Teclado ultraliviano y delgado, diseñado para destacar",
    },
    {
        id: 7,
        name: "Logitech Pro x Superlight 2",
        image: "superlight",
        price: 620000,
        description: "Uno de los mejores ratones gamer del mercado. !Solo tiene 60 gramos de peso!",
    },
    {
        id: 8,
        name: "Lamzu x FNATIC thorn",
        image: "lamzu_thorn",
        price: 465000,
        description: "Uno de los ratones mejor valorados en el PRO Gaming, con solo 62 gramos de peso",
    },
    {
        id: 9,
        name: "Logitech MX Master 3S",
        image: "mx_master",
        price: 499000,
        description: "Simplemente el mejor ratón para productividad",
    },
    {
        id: 10,
        name: "Logitech MX Anywhere 3s",
        image: "mx_anywhere",
        price: 335000,
        description: "Ratón ergonómico, ligero y portable de Logitech",
    },
    {
        id: 11,
        name: "Logitech Pebble mouse 2",
        image: "pebble_mouse",
        price: 102000,
        description: "Ratón de productividad diseñado para ser ultra portable",
    },
]