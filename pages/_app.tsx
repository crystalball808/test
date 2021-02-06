import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import { createWrapper } from 'next-redux-wrapper';
import NextNProgress from 'nextjs-progressbar'
import { postsReducer } from '../redux/postsReducer';
import '../styles/styles.css'

// const store = createStore(
//     postsReducer, composeWithDevTools(
//       applyMiddleware(thunk)
//     )
//   )
const makeStore = () =>{
  return createStore(
    postsReducer, composeWithDevTools(
      applyMiddleware(thunk, promise)
    )
  )
}
export const wrapper = createWrapper(makeStore);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NextNProgress
            color='#b9f2b4'
            height={6}
            />
    </>
  )
}

export default wrapper.withRedux(MyApp);
