import {
	ADD_POST,
	ADD_COMMENT
} from '../actions'
import { combineReducers } from 'redux'

function basic (state = {}, action) {
	return state
}

export default combineReducers({
	basic
})