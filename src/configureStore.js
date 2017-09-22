import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { getCategories } from './actions'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatcing', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.log(result)
  console.groupEnd(action.type)
  return result
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
}