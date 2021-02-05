import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { postsReducer } from '../redux/postsReducer';

// const store = createStore(
//     postsReducer, composeWithDevTools(
//       applyMiddleware(thunk)
//     )
//   )
const makeStore = () =>{
  return createStore(
    postsReducer, composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
}
export const wrapper = createWrapper(makeStore);

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);
