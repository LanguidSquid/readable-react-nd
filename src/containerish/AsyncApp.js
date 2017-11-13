import React, { Component } from 'react'
import * as ReadableAPIUtil from '../util/readable_api_util'
import { Link, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CategorizedPosts from './CategorizedPosts'
import '../App.css';
import '../index.css';
import {
  getCategories,
  getPosts,
  upvotePost,
  downvotePost,
} from '../actions'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // var post = {
    //   title: 'purple',
    //   body: 'making new posts is easy.',
    //   author: 'samiam',
    //   category: 'react'
    // }

    // ReadableAPIUtil.createPost(post)
    // ReadableAPIUtil.fetchCategories().then(json => console.log(json))
    // ReadableAPIUtil.fetchPostsByCategory('react').then(json => console.log(json))
    // ReadableAPIUtil.fetchPosts().then(json => console.log(json))
    // ReadableAPIUtil.downVotePost('8xf0y6ziyjabvozdd253nd').then(json => console.log(json))
    // ReadableAPIUtil.upVotePost('8xf0y6ziyjabvozdd253nd').then(json => console.log(json))
    // ReadableAPIUtil.getPostById('8xf0y6ziyjabvozdd253nd').then(json => console.log(json))
    // ReadableAPIUtil.editPost('8xf0y6ziyjabvozdd253nd', 'foreign affairs', 'actually a title').then(json => console.log(json))
    // ReadableAPIUtil.getCommentsByPost('8xf0y6ziyjabvozdd253nd').then(json => console.log(json))

    // var commentBody = {
    //   parentId: '8xf0y6ziyjabvozdd253nd',
    //   body: 'making new comments is easy.',
    //   author: 'samiam'
    // }

    // ReadableAPIUtil.makeComment(commentBody).then(json => console.log(json))
    // ReadableAPIUtil.getCommentById('894tuq4ut84ut8v4t8wun89g').then(json => console.log(json))
    // ReadableAPIUtil.upVoteComment('894tuq4ut84ut8v4t8wun89g').then(json => console.log(json))
    // ReadableAPIUtil.downVoteComment('894tuq4ut84ut8v4t8wun89g').then(json => console.log(json))
    // ReadableAPIUtil.editComment('894tuq4ut84ut8v4t8wun89g', 'new comment body').then(json => console.log(json))

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
    const { categories, posts } = this.props
    console.log(posts)
    console.log(JSON.stringify(posts))
    return (
      <div className="App">
        <div className="App-header">
          <div className="topDiv"></div>
          <div className="table">
            <ul className="MenuBar">
              <li>
                <Link to='/'>home</Link>
              </li>
            {!this.isEmpty(categories) && categories.categories.map(category => (
              <li>
                <Link to={category.name}>{category.name}</Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="content">
          <Route exact path='/' render={() => (
            <CategorizedPosts posts={posts} category=''/>
          )}/>
          {!this.isEmpty(categories) && categories.categories.map(category => (
          <Route path={category.name} render={() => (
            <CategorizedPosts posts={posts} category={category.name}/>
          )}/>
          ))}
        </div>
      </div>
    )
  }
}

AsyncApp.propTypes = {
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

  const { categories, posts } = state
  return {
    categories,
    posts
  }

}

export default connect(mapStateToProps)(AsyncApp)