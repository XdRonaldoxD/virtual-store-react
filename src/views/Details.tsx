import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
// import products from "./../../public/products";
import ProductCard from "../components/ProductCard";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import Checkout from "../components/Checkout";
import Products from "../interfaces/Product";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
    const [product, setProduct] = useState<Products>({
        id: "",
        title: "",
        price: 0,
        images: [],
        colors: []
    })
    const [onsale,setOnsale]=useState<Products[]>([]);
    const { id } = useParams();
    useEffect(()=>{
        axios.get('/products.json')
        .then((res)=>{
            const products=res.data;
            const detailproduct: Products  = products.find((each) => {return each.id == id}); //BUSCAMOS SI CONCIDE CON EL ID
            if (detailproduct) {
                setProduct(detailproduct)
            }
            const filterProducto=products.filter((each)=> { return each.onsale===true});//FILTRAMOS A TODOS LOS QUE TIENE(OFERTA) ONSALE) TRUE
            if (filterProducto.length >0) {
                setOnsale(filterProducto)
            }
        })
        .catch((error)=> console.log(error))
    },[id])

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
                                {onsale.map((each: Products) => (
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