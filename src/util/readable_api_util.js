const uuidv1 = require('uuid/v1')

const url = `http://localhost:3001/categories`;
const authorizationHeader = { headers: { 'Authorization': 'cakelolgarbage' }}
const authorizationHeaderMethodPost = { method: 'POST', headers: { 'Authorization': 'cakelolgarbage' }}


// GET /categories
export function fetchCategories() {
	return fetch(`http://localhost:3001/categories`, authorizationHeader )
      .then(res => {
      	return res.json()
      })
}

// GET /:category/posts
export function fetchPostsByCategory(category) {
	var uri = `http://localhost:3001/` + category + `/posts`

	return fetch(uri, authorizationHeader )
	  .then(res => {
	  	return res.json()
	  })
}

// GET /posts
export function fetchPosts() {
	return fetch(`http://localhost:3001/posts`, authorizationHeader )
	  .then(res => {
	  	return res.json()
	  })
}

// POST /posts
export function createPost(post) {
	var payload = { method: 'POST', headers: { 'Authorization': 'cakelolgarbage' }}
	post.id = uuidv1()
	post.timestamp = Date.now()
	payload.body = post

	return fetch(`http://localhost:3001/posts`, payload )
	  .then(res => {
	  	return res.json()
	  })
}

// GET /posts/:id
export function getPostById(id) {
	var uri = `http://localhost:3001/posts/` + id

	return fetch(uri, authorizationHeader )
	  .then(res => {
	  	return res.json()
	  })
}

// POST /posts/:id
export function upVotePost(id) {
	var uri = `http://localhost:3001/posts/` + id

	var upVotePayload = { method: 'POST', headers: { 'Authorization': 'cakelolgarbage' }}
	upVotePayload.body = {"option": "downVote"}

	return fetch(uri, upVotePayload )
	  .then(res => {
	  	return res.json()
	  })
}

// POST /posts/:id
export function downVotePost(id) {
	var uri = `http://localhost:3001/posts/` + id

	var downVotePayload = { method: 'POST', headers: { 'Authorization': 'cakelolgarbage' }}
	downVotePayload.body = {"option": "upVote"}

	return fetch(uri, downVotePayload )
	  .then(res => {
	  	return res.json()
	  })
}

// PUT /posts/:id
export function editPost(id, title, body) {
	var uri = `http://localhost:3001/posts/` + id

	var editPostPayload = { method: 'PUT', headers: { 'Authorization': 'cakelolgarbage' }}
	editPostPayload.body = {"title": title, "body": body}

	console.log(editPostPayload)

	return fetch(uri, editPostPayload )
	  .then(res => {
	  	return res.json()
	  })
}

// GET /posts/:id/comments
export function getCommentsByPost(id) {
	var uri = `http://localhost:3001/posts/` + id + `/comments`

	return fetch(uri, authorizationHeader )
	  .then(res => {
	  	return res.json()
	  })
}

// POST /comments
export function makeComment(comment) {
	var commentPayload = { method: 'POST', headers: { 'Authorization': 'cakelolgarbage' }}
	comment.id = uuidv1()
	comment.timestamp = Date.now()
	commentPayload.body = comment

	return fetch(`http://localhost:3001/comments`, commentPayload )
	  .then(res => {
	  	return res.json()
	  })
}

// GET /comments/:id
export function getCommentById(id) {
	var uri = `http://localhost:3001/comments/` + id

	return fetch(uri, authorizationHeader )
	  .then(res => {
	  	return res.json()
	  })
}

// POST /comments/:id
export function upVoteComment(id) {
	var uri = `http://localhost:3001/comments/` + id

	var upVotePayload = { method: 'POST', headers: { 'Authorization': 'cakelolgarbage' }}
	upVotePayload.body = {"option": "downVote"}

	return fetch(uri, upVotePayload )
	  .then(res => {
	  	return res.json()
	  })
}

// POST /comments/:id
export function downVoteComment(id) {
	var uri = `http://localhost:3001/comments/` + id

	var downVotePayload = { method: 'POST', headers: { 'Authorization': 'cakelolgarbage' }}
	downVotePayload.body = {"option": "upVote"}

	return fetch(uri, downVotePayload )
	  .then(res => {
	  	return res.json()
	  })
}

// PUT /comments/:id
export function editComment(id, body) {
	var uri = `http://localhost:3001/comments/` + id

	var editCommentPayload = { method: 'PUT', headers: { 'Authorization': 'cakelolgarbage' }}
	var editCommentRequest = {"body": body}
	editCommentRequest.timestamp = Date.now()
	editCommentPayload.body = editCommentRequest

	console.log(editCommentPayload)

	return fetch(uri, editCommentPayload )
	  .then(res => {
	  	return res.json()
	  })
}

export const changeVoteScore = (id, voteType) => fetch(`http://localhost:3001/posts/:id`, authorizationHeaderMethodPost)
      .then( (res) => { return(res.json()) })