import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";

/** 
*
* Steps For State Management
* Submit Action 
* Handle Action in Its Reducer
* Register Here -> Reducer
*
*/

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

