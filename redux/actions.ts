import axios from 'axios';
import { FETCH_POSTS } from './types';

export function fetchPosts () {
    return async (dispatch) => {
        const response = await axios.get('https://simple-blog-api.crew.red/posts');
        debugger
        dispatch({
            type: FETCH_POSTS,
            payload: response.data
        })
    }
}