/** @jsx jsx */
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {css, jsx} from '@emotion/core'

const AutoSuggestInput = ({query, handleChange, ...props}) => {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="auto-suggest-input"
    >
      <InputGroup css={css}>

        <FormControl
          aria-describedby="basic-addon1"
          value={query}
          onChange={e => handleChange(e)}
        />
        <DropdownButton
          as={InputGroup.Append}
          variant="dark"
          title="Options"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">{`Alcoholic`}</Dropdown.Item>
          <Dropdown.Item href="#">{`Non-Alcoholic`}</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </form>
  )
}

AutoSuggestInput.propTypes = {children: PropTypes.node}

export default AutoSuggestInput
