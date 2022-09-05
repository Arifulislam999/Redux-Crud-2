import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteBook, updateBook } from "./BookSlice";
import "./bookStyle.css";
function AddBook() {
    const numberOfBook = useSelector((state) => state.bookList.value.length);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [book, setBook] = useState(location.state.book);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteBook({ id: location.state.id }));
        dispatch(updateBook({ id: location.state.id, book, author }));
        navigate("/showbook", { replace: true });
    };
    return (
        <div className="addbook">
            <h1>Add Update Book....</h1>
            <form>
                <input
                    onChange={(e) => {
                        setBook(e.target.value);
                    }}
                    className="input"
                    type="text"
                    placeholder="Update book name..."
                    value={book}
                />
                <br />
                <br />
                <input
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                    className="input"
                    type="text"
                    placeholder="Update author name..."
                    value={author}
                />
                <br />
                <br />
                <button onClick={handleSubmit} className="btn">
                    Add Update
                </button>
            </form>
        </div>
    );
}

export default AddBook;
