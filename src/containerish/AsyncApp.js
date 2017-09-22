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

  render() {
    console.log(this.props)
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
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { categories, categoriesPending } = state
  console.log(categories)
  return {
    categoriesPending: categoriesPending,
    categories: categories
  }
}

export default connect(mapStateToProps)(AsyncApp)