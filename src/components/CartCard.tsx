import { useRef, useState } from "react";
import ProductProp from "../interfaces/Thumbs";
import { useDispatch } from "react-redux";
import { calcularTotal } from "../store/actions/products";

export default function CartCard({ product }: ProductProp) {
    const { id, images, title, colors, description, quantity, price } = product
    const units: any = useRef();
    const [cantidad, setQuantity] = useState(quantity ?? 0);
    const dispatch = useDispatch();
    const manageUnits = () => {
        const productsOnlocal = localStorage.getItem('cart');
        const cantidadCambiar = Number(units.current.value);;
        if (productsOnlocal) {
            const productsOnCart = JSON.parse(productsOnlocal);
            const one = productsOnCart.find((each) => each.id === id);
            one.quantity = cantidadCambiar;
            localStorage.setItem('cart', JSON.stringify(productsOnCart));
            setQuantity(cantidadCambiar);
            dispatch(calcularTotal({products:productsOnCart})) //ACTUALIZA EL CAR PARA QUE REDUX DEL TOTAL DE PRODUCTO CAMBIEN

        }
    }
    return (
        <main key={id}>
            <article className="bg-gray-200 rounded-md p-8 m-2 h-56 break-words flex justify-between">
                <img
                    className="w-24 h-24 rounded-md"
                    src={images?.[0]}
                    alt={title}
                />
                <div className="flex flex-col justify-between gap-1 w-56">
                    <strong className="text-lg font-bold leading-6 break-words block">{title}</strong>
                    <span className="whitespace-no-wrap overflow-hidden overflow-ellipsis">- {colors}</span>
                    <p className="whitespace-no-wrap overflow-hidden overflow-ellipsis">{description}</p>
                    <input
                        className="w-18 h-10 rounded-lg border border-gray-200 p-1"
                        type="number"
                        name="quantity"
                        defaultValue={quantity}
                        ref={units}
                        min="1"
                        onChange={manageUnits}
                        id={id.toString()}

                    />
                </div>
                <strong className="font-bold text-right">AR$ {(cantidad * price)}</strong>
            </article>
        </main>
    )
}