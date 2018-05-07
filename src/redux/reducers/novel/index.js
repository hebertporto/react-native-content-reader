import {
  NOVEL_SET_NOVEL
} from './../../types/NovelTypes'

import * as reducer from './reducers'

const INITIAL_STATE = {
  novel: {}
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case NOVEL_SET_NOVEL:
      return reducer.setNovel(state, action)
    default:
      return state
  }
}
