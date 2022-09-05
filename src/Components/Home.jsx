import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BookSlice";
import "./Home.css";
function Home() {
    const [book, setBook] = useState();
    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const [fill, setFill] = useState("");
    const [fill2, setFill2] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const numberOfBook = useSelector((state) => state.bookList.value.length);
    const handleBook = (e) => {
        setBook(e.target.value);
        setFill("");
    };
    const handleAuthor = (e) => {
        setAuthor(e.target.value);
        setFill2("");
    };
    const handleClick = () => {
        if (book === undefined || book === "") {
            setFill("**fill the text bar...");
        } else if (author === undefined || author === "") {
            setFill2("**fill the text bar...");
        } else {
            dispatch(addBook({ id: numberOfBook + 1, book, author }));
            setText("Success! added to the bookList....");
            setTimeout(() => {
                navigate("/showbook", { replace: true });
            }, 700);
        }
    };
    return (
        <div className="home">
            <div className="form__group field">
                <input
                    onChange={handleBook}
                    type="input"
                    className="form__field"
                    placeholder="Any Book Name"
                    name="name"
                    id="name"
                    required
                />
                <span className="fill_t">{fill}</span>
                <label htmlFor="name" className="form__label">
                    Type Here Any Book Name
                </label>
            </div>
            <div className="form__group field">
                <input onChange={handleAuthor} type="text" className="form__field" placeholder="Name" name="name" id="name-a" required />
                <span className="fill_t">{fill2}</span>

                <label htmlFor="name-a" className="form__label">
                    Type Author Name
                </label>
            </div>
            <button onClick={handleClick} className="button-85">
                Add Book
            </button>
            <br />
            <br />
            <span className="text">{text}</span>
        </div>
    );
}

export default Home;
