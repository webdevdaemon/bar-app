import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

const AutoSuggestInput = ({ query, handleChange, ...props }) => {
  return (
    <div className="autosuggestinput">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {query
              ? (<i className="fas fa-glass-martini" />)
              : (<i className="fas fa-glass-martini-alt" />)}
          </InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={e => {
            handleChange(e.target.value)
          }}
          placeholder="search"
          type="search"
          value={query}
        />
      </InputGroup>
    </div>
  )
}

AutoSuggestInput.propTypes = { children: PropTypes.node }

export default AutoSuggestInput
