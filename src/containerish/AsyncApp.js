import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../App.css';
import '../index.css';
import {
  getCategories,
  getPosts
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
    const { categories } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <div className="topDiv"></div>
          <div className="table">
            <ul className="MenuBar">
              <li>
                home
              </li>
            {!!categories && !!categories.categories && categories.categories.map(category => (
              <li>
                {category.name}
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="content">
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