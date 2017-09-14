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