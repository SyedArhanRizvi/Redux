import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {
        name: "",
        username : "",
        email : "",
        number : null
    }
}

const formReducer = createSlice({
    name:"UserForm",
    initialState,
    reducers : {
        userAcHandler: (state)=>{
            state.user.name = state.user.name,
            state.user.username = state.user.username,
            state.user.email = state.user.email,
            state.user.number = state.user.number
        }
    }
});
export const {userAcHandler} = formReducer.actions;
export default formReducer.reducer;