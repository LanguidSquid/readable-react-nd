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
    const { dispatch } = this.props
    dispatch(getCategories())
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <p>
        	{categories}
        </p>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { categories } = state

  return {
    categories
  }
}

export default connect(mapStateToProps)(AsyncApp)