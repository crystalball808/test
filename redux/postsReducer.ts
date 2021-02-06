import axios from "axios";
import { Action } from "redux";
import { FETCH_POSTS } from "./types";
import { HYDRATE } from 'next-redux-wrapper';



// const initialState = {
//     posts: []
// }

export const postsReducer = (state = [], action: Action) => {
    switch (action.type){
        case HYDRATE:
            return action.payload
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}