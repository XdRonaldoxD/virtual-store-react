
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Products from "../interfaces/Product";
import { useDispatch } from "react-redux";
import { calcularTotal } from "../store/actions/products";
import Swal from "sweetalert2";
export default function Carts() {
    const dispatch=useDispatch();
    const [productoGuardado, setProductoGuardado] = useState<Products[]>([]);
    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (cart && cart.length>0) {
            setProductoGuardado(JSON.parse(cart));
            dispatch(calcularTotal({products:JSON.parse(cart)}))
        }
    }, [])

    const finalizarComprar = () => {
        const productsOnlocal = localStorage.getItem('cart');
        if (productsOnlocal) {
            Swal.fire({
                title: "Esta seguro de realizar la compra?",
                text: "No podras revertir el proceso!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, comprar!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Comprado!",
                        text: "Se vacio el carrito de compras.",
                        icon: "success"
                    });
                    localStorage.removeItem('cart');
                    setProductoGuardado([])
                    dispatch(calcularTotal({products:[]}))
                }
            });
        }

    }
    return (
        <>
            <NavBar />
            <Hero first="tecnología" second="renovada" />
            {productoGuardado.map((each) =>
                <CartCard
                    key={each.id} product={each}
                />
            )
            }
            <CartResume finalizarComprar={finalizarComprar} title={'Incluye impuesto PAIS y percepción AFIP'} />
            <Footer />
        </>
    )
}