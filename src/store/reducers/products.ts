import { createReducer } from "@reduxjs/toolkit";
import { captureText, calcularTotal } from "../actions/products";



const initialState={ //DEFINIMOS EL ESTADO INICIAL DE LA APLICACION POR AHOR VACIA
    text:"",
    total:0
}
//CREAMOS EL REDUCER DE PRODUCTOS CON SU CONFIGURACION
const productsReducer=createReducer(
    initialState,
    (build)=> build
    .addCase(
        captureText,//SE LLAMA CON ESTA PARAMETRO
        (state,action)=>{ //LA FUNCION QUE REALIZARA PARA FILTRAR LA BUSQUEDA EN ESTE CASO DEVOLVEMOS QUE TRAER ...state
            const newState={
                ...state,
                text:action.payload.text 
            }
            return newState; //EL PARAMETROS QUE SE TIENE QUE MOSTRAR EN CUALQUIER COMPONENTE EN ESTE CASO EL text
        }
    )
    .addCase(
        calcularTotal, //SE LLAMA CON ESTA PARAMETRO
        (state,action)=>{ //LA FUNCION QUE REALIZARA PARA CALCULAR EL TOTAL
            const products = action.payload.products //EN PAYLOAD ES DONDE RECIBE LOS PRODUCTOS
            let total=0;
            if (products.length>0) {
                const subtotals = products.map((each) => each.price * each.quantity);
                 total = subtotals.reduce((acc: number, val: number) => acc + val);
            }
            const newState = {
               ...state,
               total,
            };
            return newState; //EL PARAMETROS QUE SE TIENE QUE MOSTRAR EN CUALQUIER COMPONENTE EN ESTE CASO EL total
        }
    )
)

export default productsReducer