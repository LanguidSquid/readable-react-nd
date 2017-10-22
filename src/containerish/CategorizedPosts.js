import React, { Component } from 'react'
import Post from './Post'
import '../App.css';
import '../index.css';
import {
  upvotePost,
  downvotePost,
} from '../actions'

class CategorizedPosts extends Component {
  state = {
  	posts: []
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  render() {
  	const { posts, category } = this.props
    console.log(this.props);
  	return (
	    <div className="content">
	      {!this.isEmpty(posts) && posts.posts.map(post => (
	        <Post post={post}
	          increment={(post) => {upvotePost}}
	          decrement={(post) => {downvotePost}}/>
	      ))}
	    </div>
    )
  }
}

export default CategorizedPosts