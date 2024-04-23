import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {id, name, topicId, cardIds}
        },
    },
})

export const selectAllQuizzes = (state) => state.quizzes.quizzes
export default quizzesSlice.reducer
export const { addQuiz } = quizzesSlice.actions