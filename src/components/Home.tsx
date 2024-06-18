import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
// import products from "./../../public/products";
import axios from "axios";
import Products from "../interfaces/Product";
import { useEffect, useState } from "react";
export default function Home() {
    const [products,setProductos]=useState<[]>([]);
    useEffect(()=>{
        axios.get('/products.json')
        .then((resp)=>  setProductos(resp.data) )
        .catch((error)=> console.log(error))
    },[])
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