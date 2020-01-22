/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import Navbar from 'react-bootstrap/Navbar'
import {withRouter, useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import NavLink from 'react-bootstrap/NavLink'
import {useContext} from 'react'
import {AppState} from '../../context'
import {IconUser, IconGoBack} from '../../icons'
import {Image} from 'react-bootstrap'
// import PropTypes from 'prop-types'

const __header_size = '8vh'
const __avatar_size = '5vh'

const Header = ({pageTitle = 'brbckr', ...props}) => {
  const {goBack, ...history} = useHistory()
  const APP_STATE = useContext(AppState)
  const {authPath, avatar, loggedIn} = USER

  return (
    <header css={css`
      min-height: ${__header_size}
    `}>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between min-vw-100 mh-0"
      >
        <IconGoBack onClick={() => goBack()} />
        <Navbar.Brand href="/">{`${pageTitle}`}</Navbar.Brand>
        <Button as={NavLink} to={authPath}>
          {loggedIn
            ? <Image
                roundedCircle
                src={avatar}
                css={css`height: ${__avatar_size}; width: ${__avatar_size}`}/>
            : <IconUser
                css={css`height: ${__avatar_size}; width: ${__avatar_size}`}/>
          }
        </Button>

      </Navbar>
    </header>
  )
}

export default withRouter(Header)
