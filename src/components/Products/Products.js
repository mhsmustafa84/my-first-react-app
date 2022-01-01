import React, { useEffect, useState } from "react";
import { axiosInstance } from "./../../network";
import ProductCard from './../ProductCard/ProductCard';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/api/v1/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="mb-5">Get Products Direct From API</h1>
            <div className="row">
                {products.map((product, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={index}>
                            <ProductCard productData={product} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
