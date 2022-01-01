/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { axiosInstance } from "./../../network";

export default function Product(props) {

    const [product, setProduct] = useState({});

    useEffect(() => {
        axiosInstance
            .get(`/api/v1/products/${props.match.params.id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="card p-5">
                    <div className="card-body ">
                        <h5 className="card-title">
                            {product.name}
                        </h5>
                        <div style={{ height: '400px' }}>
                            <img src={product.image} className="w-50 h-100" />
                        </div>
                        <p className="card-text">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
