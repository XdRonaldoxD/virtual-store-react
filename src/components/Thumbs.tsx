import { useEffect, useState } from "react";
import styles from "./Thumbs.module.css";
function Thumbs({ product }) {

    const [thumb,setThumb]=useState(product.images[0] ||  "/mock1.jpg");

    // HOOK USEeFFECT PARA ACTUALIZAR LA FOTO GRANDE CUANDO CAMBIEN EL PRODUCTO
    useEffect(()=>{
        setThumb(product.images[0] || "/mock1.jpg")
    },[product.id])
    //-------------------------------------------------------------------------

    return (
        <section className={styles["product-images-block"]}>
            <div className={styles["product-images"]}>
                {product.images.map((img, index) => (
                    <img
                        key={index}
                        className={styles["mini-img"]}
                        src={img}
                        alt={product.title}
                        onClick={()=> setThumb(img) }
                    ></img>
                ))}
            </div>
            <img
                className={styles["big-img"]}
                id="big-img"
                src={thumb}
                alt={product.title}
            ></img>
        </section>
    )
}

export default Thumbs;