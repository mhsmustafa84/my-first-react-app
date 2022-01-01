/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../Store/actions';
import ProductCard from './../ProductCard/ProductCard';

export default function RTProducts() {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsList());
    }, []);

    return (
        <>
            <div className="container">
                <h1 className="mb-5">Get Products From Redux Store</h1>
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
        </>
    )
}
