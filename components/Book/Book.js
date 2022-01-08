/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Book({ bookData }) {

    return (
        <>
            <div className="container">
                <div className="card p-2">
                    <div className="card-body ">
                        {bookData.volumeInfo.imageLinks &&
                            <img src={bookData.volumeInfo.imageLinks.thumbnail} />
                        }
                        <h4 className="card-title mt-4">
                            Title: {bookData.volumeInfo.title}
                        </h4>
                        {bookData.volumeInfo.publisher &&
                            <h5>
                                Publisher: {bookData.volumeInfo.publisher}
                            </h5>
                        }
                        {bookData.volumeInfo.publishedDate &&
                            <h5>
                                Publish Date: {bookData.volumeInfo.publishedDate}
                            </h5>
                        }
                        {bookData.volumeInfo.pageCount &&
                            <h5>
                                Pages: {bookData.volumeInfo.pageCount}
                            </h5>
                        }
                        {bookData.volumeInfo.previewLink &&
                            <a href={bookData.volumeInfo.previewLink}>
                                Preview
                            </a>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
