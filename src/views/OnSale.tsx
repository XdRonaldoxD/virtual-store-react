import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import styles from "./OnSale.module.css";
import products from "./../../public/products";
import { useState } from "react";
import OnsaleCard from "../components/OnSaleCard";
function Onsale() {
    // FILTRAR PRODUCTO EN OFERTA--------------------------------------
    const onSaleProducts = products.filter(products => products.onsale);
    //-----------------------------------------------------------------

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(4);

    //OBETENER LOS PRODUCTO AL NIVEL DEL RANGO 0-4(CORTAMOS)
    const productoRango = onSaleProducts.slice(from, to);
    const handlePrevious = () => {
        if (from > 0) {// Comprobamos si hay productos anteriores disponibles para mostrar
            setFrom(prevFrom => Math.max(prevFrom - 4, 0));// Usamos Math.max para asegurarnos de que 'from' no sea menor que 0 (Max.max es para compara y selecciones cual es el mayor)
            setTo(prevTo => prevTo - 4) // Reducimos el índice 'to' para retroceder al grupo anterior de productos
        }
    }
    const handleNext = () => {
        if (to < onSaleProducts.length) {
            setFrom(prevFrom => prevFrom + 4);// Incrementamos el índice 'from' para avanzar al siguiente grupo de productos
            setTo(prevTo => Math.min(prevTo + 4, onSaleProducts.length));// Usamos Math.min para asegurarnos de que 'to' no exceda la longitud total de productos (Math.min es para comparar y seleciconar el menos)
        }
    };
    return (
        <>
            <NavBar />
            <Hero first="tecnología" second="renovada" />
            <main>
                <div className={styles["product-container"]} id="products">
                    {productoRango.map((each) =>
                    (
                        <OnsaleCard
                            key={each.id}
                            id={each.id}
                            title={each.title}
                            price={each.price}
                            color={each.colors[0]}
                            image={each.images[0]}
                        />
                    ))}
                </div>

            </main>
            <div className={styles["pagination-control"]}>
                <button onClick={handlePrevious} disabled={from === 0} className={styles['previous']}>
                    Anterior
                </button>
                <button onClick={handleNext} disabled={to >= onSaleProducts.length} className={styles['next']}>
                    Siguiente
                </button>
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Onsale;