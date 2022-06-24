import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AtlasLogo = styled.img`
    height: 50%;
    width: auto;
`
export const Hamburger = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    border: none;
    padding: 1rem;
    margin: 1rem;
    height: ${props => props.hamburgerHeight};
    width: calc(${props => props.hamburgerHeight}*0.75);
    background-image: url(${props => props.backgroundImage});
    background-color: rgba(255,255,255,0);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const NavigationContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: ${props => props.navHeight};
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.navBackground};  
`
export const LogoContainer = styled.a`
  height: inherit;
  width: auto;
  margin: 1rem;
`

export const NavLinks = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 150px;
  font-size: 25px;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
`

