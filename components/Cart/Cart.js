import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

export default function Cart() {

    const itemIDs = useSelector(state => state.cartItemsID)



    return (
        <>
            <div className="container">
                <table className="table mt-3 table-bordered text-center">
                    <thead className="bg-info">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Image</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemIDs.map((ID, index) => {
                                return ID !== 0 && <CartItem id={ID} key={index} />
                            })
                        }
                    </tbody>
                </table >
            </div >
        </>
    )
}
