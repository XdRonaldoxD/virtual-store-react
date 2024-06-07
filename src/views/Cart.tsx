
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import styles from "./Cart.module.css";
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    colors: string[];
    onsale: boolean;
    quantity: number;
    units: number;
}
export default function Carts() {
    const [productoGuardado, setProductoGuardado] = useState<Product[]>([]);
    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (cart) {
            setProductoGuardado(JSON.parse(cart));
        }
    }, [])

    const calcularTotal = (): number => {
        return productoGuardado.reduce((suma, product) => {
            return suma + (product.quantity * product.price)
        }, 0)
    }

    return (
        <>
            <NavBar />
            <Hero first="tecnología" second="renovada" />
            {productoGuardado.map((product) => (
                <main key={product.id}>
                    <article className={styles["product-cart"]}>
                        <img
                            className={styles["product-img"]}
                            src={product.images[0]}
                            alt={product.title}
                        />
                        <div className={styles["product-details"]}>
                            <strong className={styles["product-title"]}>{product.title}</strong>
                            <span className={styles["product-description"]}>- {product.colors[0]}</span>
                            <p className={styles["product-description"]}>
                                {product.description}
                            </p>
                            <input
                                className={styles["product-input"]}
                                type="number"
                                name="quantity"
                                defaultValue={product.quantity}
                                min="1"
                                id={product.id.toString()}
                            />
                        </div>
                        <strong className={styles["price"]}>AR$ {(product.quantity * product.price)}</strong>
                    </article>
                </main>
            ))}

            <main>
                <div className={styles["cart-resume"]}>
                    <div className={styles["cart-data"]}>
                        <h2 className={styles["cart-title"]}>
                            <span>Resumen</span>
                            <span>del</span>
                            <span>pedido</span>
                        </h2>
                        <div className={styles["cart-total"]}>
                            <h3>Total</h3>
                            <strong className={styles["cart-price"]}>${calcularTotal().toLocaleString()}</strong>
                        </div>
                        <small className={styles["cart-tax"]}>
                            Incluye impuesto PAIS y percepción AFIP.
                        </small>
                    </div>
                    <button className={styles["cart-btn"]} id="buy" type="button">
                        COMPRAR
                    </button>
                </div>
            </main>

            <Footer />
        </>
    )
}