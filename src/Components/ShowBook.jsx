import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BookSlice";
import "./bookStyle.css";
function ShowBook() {
    const books = useSelector((state) => state.bookList.value);
    const dispacth = useDispatch();

    return (
        <div className="showbook">
            <h3 className="message">List Of Book And Author Name List....</h3>
            {books.map((data, index) => {
                const { id, book, author } = data;
                return (
                    <div div key={index} className="bookstyle">
                        <h3>{id}</h3>
                        <h2>
                            Book Name:<span>{book}</span>
                        </h2>
                        <h3>
                            Author Name:<span>{author}</span>
                        </h3>
                        <div>
                            <Link to="/addbook" state={{ id, book, author }}>
                                <button className="btn">Update</button>
                            </Link>
                            <button
                                className="btn"
                                onClick={() => {
                                    dispacth(deleteBook({ id: data.id }));
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ShowBook;
