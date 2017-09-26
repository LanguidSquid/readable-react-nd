import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getCategories
} from '../actions'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    const { dispatch } = this.props
    dispatch(getCategories())
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  render() {
    console.log(this.props.categories)
    const { categories } = this.props
    return (
      <div>
        {!this.isEmpty(categories)}
        {!this.isEmpty(categories) && categories.map(category => (
          <p>
            category.name
          </p>
        ))}
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

  const { categories } = state
  if(isEmpty(categories)){
    return {
      categories: []
    }
  }else {
    console.log(categories)
    return {
      categories
    }
  }

}

export default connect(mapStateToProps)(AsyncApp)