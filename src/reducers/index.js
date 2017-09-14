import {
	GET_CATEGORIES,
	ADD_POST,
	ADD_COMMENT
} from '../actions'
import { combineReducers } from 'redux'

function basic (state = {}, action) {
	switch (action.type) {
		case GET_CATEGORIES:
			const { recipe } = action

			return {
				...state,
				[recipe.label]: recipe
			}
		default:
		 return state
	}
}

export default combineReducers({
	basic
})