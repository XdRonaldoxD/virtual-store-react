import { createAction } from "@reduxjs/toolkit";

//LA ACION QUE VA REALIZAR EL PRODUCTS
export const captureText = createAction("captureText",
    (obj) => {
        return {
            payload: { text: obj.text } //TIENE QUE MANDAR LA CARGA PAYLADO CON LOS DATOS MANDA EL REDUCTOR DE TEXTO
        }
    }
);

//ACTION PARA EL TEMA DE LOS TOTALES
export const calcularTotal=createAction("calcularTotal",
    (obj)=>({
        payload:{products:obj.products}
    })
)


// const productoActions = { captureText }
export default {captureText,calcularTotal};

