import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";

//GUARDAMOS TODOS LOS REDUCTORES QUE SE NECESITA COMO LOS DATOS DEL CLIENTE U OTRO DATOS
const store=configureStore({
    reducer:{
        //user
        products:productsReducer
    }
})

export default store;