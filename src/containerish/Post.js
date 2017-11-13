import React, { Component } from 'react'
import * as ReadableAPIUtil from '../util/readable_api_util'
import AngleUpIcon from 'react-icons/lib/fa/angle-up'
import AngleDownIcon from 'react-icons/lib/fa/angle-down'
import { connect } from 'react-redux'
import '../App.css';
import '../index.css';
import {
  getCategories,
  getPosts,
  upvotePost,
  downvotePost,
  getCommentsByPost,
} from '../actions'

class Post extends Component {
	constructor(props) {
      super(props)
    }

	componentDidMount() {
		retrieveCommentsByPost(this.props.post.id)
    }

	render () {
		const { post, comments } = this.props

		console.log(comments)

	  	return (
	        <div className="Post">
			  <div className="VoteScore" title={post.voteScore}>
			    <button className='icon-btn'>
			      <AngleUpIcon size={20} value={post.id} onClick={(event) => {
			      	if(!!event.target.attributes.getNamedItem('value')){
			      		upvotePost(event.target.attributes.getNamedItem('value').value)
			      	}
			      }}/>
			    </button>
			    <div className="Score" title="score">
			      {post.voteScore}
			    </div>
			    <button className='icon-btn'>
			      <AngleDownIcon size={20} value={post.id} onClick={(event) => {
			      	if(!!event.target.attributes.getNamedItem('value')){
			      		downvotePost(event.target.attributes.getNamedItem('value').value)
			  		}
			      }}/>
			    </button>
			  </div>
			  <div className="Author" title="author">
			    <p>
			      {post.author}
			    </p>
			  </div>
			  <div className="Title" title="title">
			    <p>
			      {post.title}
			    </p>
			  </div>
			  <div className="Category"  title="category">
			    <p>
			      {post.category}
			    </p>
			  </div>
			  <div className="PostBody"   title="body">
			    <p>
			      {post.body}
			    </p>
			  </div>


			</div>
		)
    }
}

function mapStateToProps(state) {
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  const { comments } = state
  return {
    comments
  }

}

function mapDispatchToProps(dispatch) {
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  return {
    retrieveCommentsByPost: id => dispatch(getCommentsByPost(id))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Post)