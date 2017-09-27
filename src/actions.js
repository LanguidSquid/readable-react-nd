import * as ReadableAPIUtil from './util/readable_api_util'
import React from 'react'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
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

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receivePosts(json) {
  console.log(json)
  return {
    type: RECEIVE_POSTS,
    posts: json
  }
}

export function getPosts() {
  return dispatch => {
    dispatch(requestCategories())
    return fetch(`http://localhost:3001/posts`, { headers: { 'Authorization': 'whatever-you-want' }} )
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => dispatch(receivePosts(json)))
  }
}

function receiveCategories(json) {
  console.log(json)
  return {
    type: RECEIVE_CATEGORIES,
    categories: json
  }
}

export function getCategories() {
  return dispatch => {
    dispatch(requestCategories())
    return fetch(`http://localhost:3001/categories`, { headers: { 'Authorization': 'whatever-you-want' }} )
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => dispatch(receiveCategories(json.categories)))
  }
}