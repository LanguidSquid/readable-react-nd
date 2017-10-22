import {
  GET_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_CATEGORIES,
  ADD_POST,
  RECEIVE_POSTS,
  UPVOTE_POST,
  DOWNVOTE_POST,
  ADD_COMMENT
} from './actions'
import { combineReducers } from 'redux'

function categories (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const { categories } = action
      console.log(categories)
      return Object.assign({}, state, {
        categories
      })
    case REQUEST_CATEGORIES:
      return state
    default:
      return state
  }
}

function posts (state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      return state
    case RECEIVE_POSTS:
      const { posts } = action
      console.log(posts)
      return Object.assign({}, state, {
        posts
      })
    default:
      return state
  }
}

function handleVotes (state = {}, action) {
  switch (action.type) {
    case UPVOTE_POST:
      return state
    case DOWNVOTE_POST:
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
  categories,
  posts,
  handleComments
})