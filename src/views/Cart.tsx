
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Products from "../interfaces/Product";
export default function Carts() {
    const [productoGuardado, setProductoGuardado] = useState<Products[]>([]);
    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (cart) {
            setProductoGuardado(JSON.parse(cart));
        }
    }, [])

    const calcularTotal = (): number => {
        return productoGuardado.reduce((suma, product) => {
            const quantity = product.quantity ?? 0;
            return suma + (quantity* product.price)
        }, 0)
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
            <CartResume title={'Incluye impuesto PAIS y percepción AFIP'} calcularTotal={calcularTotal()} />
            <Footer />
        </>
    )
}