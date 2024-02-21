import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { USERS_REDUCER , Side_Panel } from '../Redux/REDUCERS'

const reducer = combineReducers({
    USERS_REDUCER,
    Side_Panel
})

const store = configureStore({
    reducer
})

export default store