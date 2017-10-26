import * as ReadableAPIUtil from './util/readable_api_util'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AngleUpIcon from 'react-icons/lib/fa/angle-up'
import AngleDownIcon from 'react-icons/lib/fa/angle-down'
import '../App.css';
import '../index.css';
import {
  getCategories,
  getPosts,
  upvotePost,
  downvotePost,
} from '../actions'

class Post extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    const { dispatch } = this.props
    dispatch(getCategories())
    dispatch(getPosts())
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

	render() {
		const { post } = this.props
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
			    <div className="Score"   title="score">
			      {post.voteScore}
			    </div>
			    <button className='icon-btn'>
			      <AngleDownIcon size={20} value={post.id} onClick={(event) => {
			      	if(!!event.target.attributes.getNamedItem('value')){
			      		dispatch(downvotePost(event.target.attributes.getNamedItem('value').value))
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

Post.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  const { post } = state
  return {
    post
  }

}

export default connect(mapStateToProps)(Post)