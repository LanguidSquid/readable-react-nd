import {
	GET_CATEGORIES,
	RECEIVE_CATEGORIES,
	REQUEST_CATEGORIES,
	ADD_POST,
	ADD_COMMENT
} from './actions'
import { combineReducers } from 'redux'

function basic (state = {}, action) {
	switch (action.type) {
		case RECEIVE_CATEGORIES:
			const { categories } = action
			console.log(categories);
			return Object.assign({}, state, {
				categoriesPending: true,
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

export default combineReducers({
	basic
})