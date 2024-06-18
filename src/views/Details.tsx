import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import products from "./../../public/products";
import ProductCard from "../components/ProductCard";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import Checkout from "../components/Checkout";
import Products from "../interfaces/Product";

function Details() {
    const { id } = useParams();
    const product:Products = products.find((each) => each.id == id);
    const onsale = products.filter((each) => each.onsale); //FILTRAMOS A TODOS LOS QUE TIENE ONSALE TRUE
    return (
        <>
            <NavBar />
            {!product && <Hero first="NOT" second="found" />}
            <main className="w-full flex justify-center items-center p-[20px]">
                <div className="w-full flex flex-wrap justify-between">
                    {product && (
                        <div id="details" className="w-full flex justify-center flex-wrap">
                            <Thumbs product={product} />
                            <Description product={product} />
                            <Checkout product={product} />
                        </div>
                    )}
                    <div className="w-full flex flex-col justify-center items-center">
                        <h2 className="text-[40px]">Week Sale</h2>
                        <div id="product-container" className="flex flex-col md:flex-row flex-wrap items-center justify-between w-full lg:w-[1024px]">
                            {onsale.map((each:Products) => (
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
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )

}

export default Details;