import { combineReducers } from 'redux'

import NovelReducer from './reducers/novel/'

export const reducers = {
  novel: NovelReducer
}

export const rootReducer = combineReducers(reducers)
