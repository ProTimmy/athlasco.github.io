import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { verifyAuth } from './redux/actions'
import rootReducer from './redux/reducers'

const configureStore = (persistedState) => {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  )

  store.dispatch(verifyAuth())
  return store
}

export default configureStore