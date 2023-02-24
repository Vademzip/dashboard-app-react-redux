import {configureStore} from "@reduxjs/toolkit";
import {filterReducer} from "./features/Filter/filter-slice";
import {positionReducer} from "./features/Positions/position-slice";

export const store = configureStore({
    reducer: {
        filters : filterReducer,
        positions : positionReducer
    },
    devTools: true
})