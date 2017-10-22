import React, { Component } from 'react'
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