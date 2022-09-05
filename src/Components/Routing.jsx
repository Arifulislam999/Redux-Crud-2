import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
// import AddBook from "./AddBook";
import Navbar from "./Navbar";
import ShowBook from "./ShowBook";
import ErrorPage from "./ErrorPage";
import AddBook from "./AddBook";
function Routing() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/showbook" element={<ShowBook />}></Route>

                <Route path="/addbook" element={<AddBook />}></Route>
                <Route path="/*" element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
