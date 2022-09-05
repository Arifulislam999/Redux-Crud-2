import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BookSlice";

const Store = configureStore({
    reducer: {
        bookList: BookReducer,
    },
});
export default Store;
