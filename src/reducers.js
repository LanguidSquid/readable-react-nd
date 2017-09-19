import {
	GET_CATEGORIES,
	RECEIVE_CATEGORIES,
	ADD_POST,
	ADD_COMMENT
} from './actions'
import { combineReducers } from 'redux'

function basic (state = {}, action) {
	switch (action.type) {
		case RECEIVE_CATEGORIES:
			const { categories } = action

			return {
				...state,
				cetegories: categories
			}
		default:
		 return state
	}
}

export default combineReducers({
	basic
})