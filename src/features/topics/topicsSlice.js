import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon } = action.payload;
            state.topics[id] = {id, name, icon, quizIds: []}
        },
    },
    extraReducers: {
       [addQuiz]: (state, action) => {
            const {topicId, id} = action.payload;
            state.topics[topicId].quizIds.push(id)
       }
    }
})

export const selectAllTopics = (state) => state.topics.topics
export default topicsSlice.reducer
export const {addTopic} = topicsSlice.actions