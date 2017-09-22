import {
  GET_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_CATEGORIES,
  ADD_POST,
  ADD_COMMENT
} from './actions'
import { combineReducers } from 'redux'

function handleCategories (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const { categories } = action
      console.log(categories);
      return Object.assign({}, state, {
        categoriesPending: false,
        categories: categories
      })
    case REQUEST_CATEGORIES:
        return Object.assign({}, state, {
        categoriesPending: true,
        categories: []
      })
    default:
      return state
  }
}

function handlePosts (state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      return state
    default:
      return state
  }
}

function handleComments (state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state
    default:
      return state
  }
}

export default combineReducers({
  handleCategories,
  handlePosts,
  handleComments
})