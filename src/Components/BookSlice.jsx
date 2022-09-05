import { createSlice } from "@reduxjs/toolkit";
import { ListBook } from "./InitialState";

export const BookSlice = createSlice({
    name: "BookList",
    initialState: { value: ListBook },
    reducers: {
        addBook: (state, action) => {
            state.value.push(action.payload);
        },
        updateBook: (state, action) => {
            state.value.push(action.payload);
        },
        deleteBook: (state, action) => {
            state.value = state.value.filter((book) => book.id !== action.payload.id);
        },
    },
});
export const { addBook, updateBook, deleteBook } = BookSlice.actions;
export default BookSlice.reducer;
