import React, { Component } from "react"
import PropTypes from "prop-types"

class SearchPage extends Component {
  state = {}
  static propTypes = { children: PropTypes.node, }

  render() {
    return <div className="searchpage" />
  }
}

export default SearchPage
