import { createAction } from "@reduxjs/toolkit";

//LA ACION QUE VA REALIZAR EL PRODUCTS
const captureText = createAction("captureText",
    (obj) => {
        return {
            payload: { text: obj.text } //TIENE QUE MANDAR LA CARGA PAYLADO CON LOS DATOS MANDA EL REDUCTOR DE TEXTO
        }
    }
);

// const productoActions = { captureText }
export default captureText;

