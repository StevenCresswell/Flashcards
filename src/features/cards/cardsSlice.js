import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {id, front, back}
        },
    },
})

export const selectCard = (id) => (state) => state.cards.cards[id]
export default cardsSlice.reducer
export const { addCard } = cardsSlice.actions