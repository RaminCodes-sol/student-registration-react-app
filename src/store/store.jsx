import { configureStore } from "@reduxjs/toolkit"
import studentReducer from './studentSlice'


const store = configureStore({
    reducer: studentReducer,
})

export default store