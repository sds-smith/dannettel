import { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import AtlasLogoWhite from '../../assets/1664_logo_sideways-logo-whte-crop-more-top-20201204110725.png'
import HamburgerIcon from '../../assets/icons/hamburger_white.svg'
import CloseIcon from '../../assets/icons/close_white.svg'
import SocialToolbar from '../../components/social-toolbar/social-toolbar.component'
import { NavigationContainer, LogoContainer, NavLink, NavLinks, AtlasLogo, Hamburger } from './navigation.styles'
import SideNav from '../../components/sidenav/sidenav.component'

const Navigation = ({navBackground, isDesktop, isLandscape}) => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    
    const toggleHamburger = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const navHeight = isDesktop ? '90px' : '60px'
    const hamburgerHeight = isDesktop ? '60px' : '40px'

    return (
      <Fragment>
        <NavigationContainer navBackground={navBackground} navHeight={navHeight} >
          <LogoContainer href={ "https://edannettel.atlaspremierrealty.com" } target='_blank'>
            <AtlasLogo src={AtlasLogoWhite} alt='atlas logo' />
          </LogoContainer>  
          {isDesktop && 
            <NavLinks>
              <NavLink to='/contact'>Contact</NavLink>
              <a href='tel:4108617373'>(410) 861-7373</a>
            </NavLinks>}
          <Hamburger hamburgerHeight={hamburgerHeight} backgroundImage={isOpenMenu ? CloseIcon : HamburgerIcon} onClick={toggleHamburger} />
        </NavigationContainer>
        <SideNav isOpenMenu={isOpenMenu} isDesktop={isDesktop} isLandscape={isLandscape} toggleHamburger={toggleHamburger} />
        {!isDesktop && <SocialToolbar width='80%' />}
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation