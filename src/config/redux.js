import { applyMiddleware, createStore as create } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from '../redux'

const logger = createLogger({
  duration: true,
  collapsed: true
})

export const createStore = () => {
  return create(rootReducer, applyMiddleware(thunk, logger))
}
