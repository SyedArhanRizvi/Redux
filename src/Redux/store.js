import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Features/Counter/counterSlice"
import formReducer from "../Features/Form/formSlice"
export const store = configureStore({
  reducer: {
    counter : counterReducer,
    userForm: formReducer
  },
})