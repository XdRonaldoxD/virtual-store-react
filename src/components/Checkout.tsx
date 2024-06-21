import { useState, useEffect, useRef } from "react";
import ProductProp from "../interfaces/Thumbs";
function Checkout({ product }:ProductProp) {
  const units:any = useRef(1)
  const [quantity, setQuantity] = useState(1);   // inicializa con 1
  const [button, setButton] = useState(false); // inicializa con false
  const [input, setInput] = useState(false); // inicializa con false

  // Gestionar los datos del localStorage
  useEffect(() => {
    
    let productsOnCart: any[] = [];
    const cart = localStorage.getItem("cart");
    if (cart) {
      productsOnCart = JSON.parse(cart);
    }
    const isInCart = productsOnCart.some((each) => each.id === product.id);
    setButton(isInCart);
    setInput(isInCart);

    const carritoLocal=productsOnCart.find((each)=> each.id===product.id)
    if (carritoLocal) {
      setQuantity(carritoLocal.quantity)
    }else{
      setQuantity(1);
    }
  }, [product]);

  const manageCart = () => {
    let productsInStorage: any[] = [];
    const cart = localStorage.getItem("cart");
    if (cart) {
      productsInStorage = JSON.parse(cart);
    }

    const one  = productsInStorage.find((each) => each.id === product.id);
    if (!one ) {
      product.quantity = quantity;
      productsInStorage.push(product);
      setButton(true);
      setInput(true);
    } else {
      productsInStorage = productsInStorage.filter((each) => each.id !== product.id);
      setButton(false);
      setInput(false);

    }
    localStorage.setItem("cart", JSON.stringify(productsInStorage));
  };

  return (
    <section className="w-[340px] p-[10px] m-[10px] flex flex-col">
      <div className="bg-[#ebebeb] p-10 rounded-md">
        <span className="text-[#ff3b3c]">Total:</span>
        <h2 id="price" className="text-[28px] font-bold mt-[10px]">
          $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className="text-wrap leading-5 text-[12px]">
          Includes Country tax and AFIP collection
        </p>
        <ul className="p-0 list-none mb-[30px]">
          <li className="flex my-[15px]">
            <img src="/truck.png" alt="Truck" className="mr-[15px]" />
            <img src="/plane.png" alt="Plane" className="mr-[15px]" />
          </li>
          <li>
            <span className="text-wrap leading-5 text-[10px]">
              Add the product to the cart to know the shipping costs
            </span>
          </li>
        </ul>
        <div>
          <div className="flex mb-[10px]">
            <input
              className="h-[40px] rounded-md border-0 w-[60px] mr-[10px] p-[5px] pl-[15px] box-border"
              type="number"
              min="1"
              value={quantity}
              disabled={input}
              ref={units}
              onChange={() => setQuantity(Number(units.current.value))}
            />
            <button
              type="button"
              className={
                button
                  ? "w-full bg-[#202020] hover:bg-[#404040] text-[14px] text-white font-bold border-0 h-[40px] rounded-md"
                  : "w-full bg-[#ff3b3c] hover:bg-[#ff5151] text-[14px] text-white font-bold border-0 h-[40px] rounded-md"
              }
              onClick={manageCart}
            >
              {button ? `Remover del carrito (${quantity})` : `Agregar al carrito (${quantity})`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;