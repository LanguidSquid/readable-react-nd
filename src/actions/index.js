import * as ReadableAPIUtil from '../util/readable_api_util'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'

export function addPost({ timestamp }) {
	return {
		type: ADD_POST,
		timestamp
	}
}

export function addComment({ timestamp }) {
	return {
		type: ADD_COMMENT,
		timestamp
	}
}

export const getCategories = categories => ({
	type: GET_CATEGORIES,
	categories
})

export const fetchCategories = () => dispatch => (
	ReadableAPIUtil
		.fetchCategories()
		.then(categories => dispatch(getCategories(categories)))
)