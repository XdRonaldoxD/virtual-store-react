import Footer from "./Footer";
import Hero from "./Hero";
import styles from "./Home.module.css";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import products from "./../../public/products";
export default function Home() {
    return (
        <>
            <NavBar />
            <Hero first="tecnología" second="renovada" />
            <main>
                <div className={styles["product-container"]} id="products">
                    {products.map((each) => (
                        <ProductCard
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
            <Footer />
        </>
    )
}