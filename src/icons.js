import React from 'react'
import {Icon} from 'react-icons-kit'
import {withBaseIcon} from 'react-icons-kit'

import {blog} from 'react-icons-kit/icomoon/blog'
import {browser_layout_1} from 'react-icons-kit/ikons/browser_layout_1'
import {browser_layout_2} from 'react-icons-kit/ikons/browser_layout_2'
import {browser_layout_3} from 'react-icons-kit/ikons/browser_layout_3'
import {browser} from 'react-icons-kit/ikons/browser'
import {chevronLeft} from 'react-icons-kit/fa/chevronLeft'
import {circleLeft} from 'react-icons-kit/icomoon/circleLeft'
import {code} from 'react-icons-kit/ikons/code'
import {cogs} from 'react-icons-kit/icomoon/cogs'
import {css3} from 'react-icons-kit/icomoon/css3'
import {cube} from 'react-icons-kit/ionicons/cube'
import {dice} from 'react-icons-kit/icomoon/dice'
import {userCircle} from 'react-icons-kit/fa/userCircle'
import {glass} from 'react-icons-kit/fa/glass'
import {git} from 'react-icons-kit/icomoon/git'
import {github} from 'react-icons-kit/icomoon/github'
import {home} from 'react-icons-kit/icomoon/home'
import {htmlFive2} from 'react-icons-kit/icomoon/htmlFive2'
import {infoLarge} from 'react-icons-kit/typicons/infoLarge'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {list2} from 'react-icons-kit/icomoon/list2'
import {menu} from 'react-icons-kit/icomoon/menu'
import {messages} from 'react-icons-kit/typicons/messages'
import {npm} from 'react-icons-kit/icomoon/npm'
import {pen} from 'react-icons-kit/icomoon/pen'
import {plus} from 'react-icons-kit/icomoon/plus'
import {priceTags} from 'react-icons-kit/icomoon/priceTags'
import {profile} from 'react-icons-kit/icomoon/profile'
import {search} from 'react-icons-kit/icomoon/search'
import {statsBars} from 'react-icons-kit/icomoon/statsBars'
import {statsBars2} from 'react-icons-kit/icomoon/statsBars2'
import {terminal} from 'react-icons-kit/iconic/terminal'
import {user} from 'react-icons-kit/icomoon/user'
import {wordpress} from 'react-icons-kit/icomoon/wordpress'

const HEX = {
  dark: '#231C17',
  light: '#E1E8ED',
}

const NavIcon = withBaseIcon({size: '100%', style: {color: HEX.light}})
const InputIcon = withBaseIcon({size: '48px', style: {color: HEX.dark}})
const HeaderIcon = withBaseIcon({size: '5vh', style: {color: HEX.light}})
const FooterIcon = withBaseIcon({
  className: 'nav-link-icon',
  style: {color: HEX.dark},
  size: '5vh',
})
const ControlIcon = withBaseIcon({
  size: '2.5vh',
  style: {
    margin: 'auto',
    padding: 0,
    color: HEX.light,
    height: '100%',
  },
})

export const IconControlPlus = () => <ControlIcon icon={plus} />
export const IconAccount = () => <HeaderIcon icon={user} />
export const IconAdd = () => <FooterIcon icon={plus} />
// export const IconGoBack = () => <HeaderIcon icon={circleLeft} />
export const IconInputSearch = () => <InputIcon icon={search} />
export const IconList = () => <FooterIcon icon={list2} />
export const IconAbout = () => <NavIcon icon={infoLarge} />
export const IconBlog = () => <NavIcon icon={blog} />
export const IconBrowser = () => <Icon icon={browser} />
export const IconBrowserLayout1 = () => <Icon icon={browser_layout_1} />
export const IconBrowserLayout2 = () => <Icon icon={browser_layout_2} />
export const IconBrowserLayout3 = () => <Icon icon={browser_layout_3} />
export const IconCocktail = () => <Icon icon={glass} />
export const IconCode = () => <Icon icon={code} />
export const IconContact = () => <NavIcon icon={messages} />
export const IconCss3 = () => <Icon icon={css3} />
export const IconCube = () => <NavIcon icon={cube} />
export const IconGit = () => <Icon icon={git} />
export const IconGithub = () => <Icon icon={github} />
export const IconGoBack = () => <InputIcon icon={chevronLeft} />
export const IconHome = () => <NavIcon icon={home} />
export const IconHtmlFive2 = () => <Icon icon={htmlFive2} />
export const IconLinkedin = () => <Icon icon={linkedin} />
export const IconMenu = () => <Icon icon={menu} />
export const IconNpm = () => <Icon icon={npm} />
export const IconPen = () => <Icon icon={pen} />
export const IconResume = () => <NavIcon icon={profile} />
export const IconStatsBars = () => <Icon icon={statsBars} />
export const IconStatsBars2 = () => <Icon icon={statsBars2} />
export const IconTerminal = () => <Icon icon={terminal} />
export const IconWordpress = () => <Icon icon={wordpress} />
export const IconRandom = () => <FooterIcon icon={dice} />
export const IconUser = () => <HeaderIcon icon={userCircle} />
export const IconSearch = () => <FooterIcon icon={search} />
export const IconSettings = () => <FooterIcon icon={cogs} />
export const IconTags = () => <FooterIcon icon={priceTags} />
