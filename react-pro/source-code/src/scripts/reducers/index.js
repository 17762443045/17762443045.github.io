import {combineReducers}from "redux-immutable"
import {data} from "./data";
import {time} from "./guide";
import {foot} from  "./foot";

export const reducers =combineReducers({
    data:data,
    time:time,
    foot:foot,
})