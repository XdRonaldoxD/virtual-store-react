import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import products from "./../../public/products";
import Products from "../interfaces/Product";
export default function Home() {
    return (
        <>
            <NavBar />
            <Hero first="tecnología" second="renovada" />
            <main>
                <div className="w-[1080px] flex flex-wrap justify-between" id="products">
                    {products.map((each:Products) => (
                        <ProductCard
                            key={each.id}
                            id={each.id}
                            title={each.title}
                            price={each.price}
                            color={each.colors?.[0]}
                            image={each.images?.[0]}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}