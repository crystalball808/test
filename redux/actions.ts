import axios from 'axios';
import { FETCH_POSTS } from './types';

export const fetchPosts = () => async (dispatch) => {
        const response = await axios.get('https://simple-blog-api.crew.red/posts');
        dispatch({
            type: FETCH_POSTS,
            payload: response.data
        })
}