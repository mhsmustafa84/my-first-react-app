/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { axiosInstance2 } from "./../../network";
import Book from './../Book/Book';

export default function Books() {

    const [books, setBooks] = useState([]);

    const [serachValue, setSerachValue] = useState('');

    const getSerachValue = (e) => {
        setSerachValue(e.target.value);
    }

    const getBooks = () => {
        axiosInstance2
            .get(`${serachValue}`)
            .then((res) => {
                setBooks(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {console.log(books)}
            <div className="container">
                <h1 className="mb-5">Books Search Direct From API</h1>
                <div className="d-flex justify-content-center my-5">
                    <input className="form-control w-25" placeholder="Enter Book Name" onChange={getSerachValue} />
                    <button className="btn btn-success ml-3" onClick={getBooks}>Search</button>
                </div>
                <div className="row">
                    {books.map((book, index) => {
                        return (
                            <div className="col-md-4 mb-4" key={index}>
                                <Book bookData={book} />
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}
