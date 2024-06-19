import { createReducer } from "@reduxjs/toolkit";
import captureText from "../actions/products";



const initialState={ //DEFINIMOS EL ESTADO INICIAL DE LA APLICACION POR AHOR VACIA
    text:"",
}
//CREAMOS EL REDUCER DE PRODUCTOS CON SU CONFIGURACION
const productsReducer=createReducer(
    initialState,
    (build)=> build.addCase(
        captureText,
        (state,action)=>{
            const newState={
                ...state,
                text:action.payload.text
            }
            return newState;
        }
    )
)

export default productsReducer