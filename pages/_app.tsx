import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { postsReducer } from '../redux/postsReducer';

const store = createStore(
  postsReducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
