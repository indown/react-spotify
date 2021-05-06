import { combineReducers } from "redux";
import counter from './counter'
export const reducer = combineReducers({
    counter
})
export type AppState = ReturnType<typeof reducer>;