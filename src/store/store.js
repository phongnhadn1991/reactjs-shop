import { configureStore } from "@reduxjs/toolkit";

import userSlice from './reducers/userSlice'

// Store
const store = configureStore({
    reducer: {
        users : userSlice.reducer
    }
})

// Export
export default store