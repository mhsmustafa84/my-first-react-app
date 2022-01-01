/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { cartItems, cartItemsID } from './../../Store/actions';
import { useState } from 'react';
import './ProductCard.css'


export default function ProductCard({ productData }) {

    const [itemAdded, setItemAdded] = useState(false);

    let item = useSelector(state => state.cartItems)
    let itemID = useSelector(state => state.cartItemsID)
    const dispatch = useDispatch();



    const addToCart = () => {
        setItemAdded(true);
        item++;
        dispatch(cartItems(item));
        dispatch(cartItemsID(productData.id));
        console.log(itemID);
    }

    return (
        <>
            <div className="card p-2 bg-light">
                <div className="card-body">
                    <h5 className="card-title name-height">
                        <Link to={`/products/${productData.id}`} className="nav-link mb-3">
                            {productData.name}
                        </Link>
                    </h5>
                    <div className="img-height">
                        <img src={productData.image} className="w-50" />
                    </div>
                    <p className="card-text price-height">
                        {productData.price}
                    </p>
                    <div className="add-cart-height">
                        {!itemAdded &&
                            <button className="btn btn-warning" onClick={addToCart}>Add to Cart</button>
                        }
                    </div>


                </div>
            </div>
        </>
    )
}
