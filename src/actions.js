import fetch from 'isomorphic-fetch'
import * as ReadableAPIUtil from './util/readable_api_util'
import React from 'react'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'

const url = `http://localhost:3001/categories`;

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

function receiveCategories(json) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: json
  }
}

export function getCategories() {
  return dispatch => {
    return fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then(response => {
      	console.log(response)
      	response.json()
      })
      .then(json => dispatch(receiveCategories(json)))
  }
}

export const fetchCategories = () => dispatch => (
	ReadableAPIUtil
		.fetchCategories()
		.then(categories => dispatch(receiveCategories(categories)))
)