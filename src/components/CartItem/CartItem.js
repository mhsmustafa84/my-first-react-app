/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import './CartItem.css';
import React, { useEffect, useState } from "react";
import { axiosInstance } from "./../../network";

export default function CartItem(props) {

    let [product, setProduct] = useState({});
    let [quantity, setQuantity] = useState(0);

    useEffect(() => {
        axiosInstance
            .get(`/api/v1/products/${props.id}`)
            .then((res) => {
                product = res.data;
                setProduct(product);
                console.log(product);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const minus = () => {
        quantity > 0 && quantity--;
        setQuantity(quantity);
    }

    const plus = () => {
        quantity++;
        setQuantity(quantity);
    }

    return (
        <>
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img className="img" src={product.image} /></td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger" disabled={quantity === 0} onClick={minus}>-</button>
                        <span className="mx-4">{quantity}</span>
                        <button type="button" className="btn btn-success" onClick={plus}>+</button>
                    </div>
                </td>
            </tr>
        </>
    )
}
