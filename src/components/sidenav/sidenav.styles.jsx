import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../assets/styling";

const { primary, quinary } = Colors

export const SideNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: ${props => props.pageFlow};
    align-items: center;
    justify-content: ${props => props.justifyContent};
    height: 100%;
    width: 100%;
    opacity: ${props => props.opacity};
    z-index: ${props => props.zIndex};
    transition: opacity 1000ms;
    padding-top: ${props => props.padding};
    color: ${quinary};
    background: linear-gradient(to right, ${quinary}, ${primary});

`

export const HeadshotContainer = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 125px;

    img {
        height: 150px;
        width: auto;
      }
`
export const NavLinksContainer = styled.nav`
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
`

const LinkStyles = `text-decoration: none; color: ${quinary}; margin-bottom: 30px; &:hover {opacity: 60%; cursor: pointer;} &:visited {text-decoration: none;}`

export const NavLink = styled(Link)`
    ${LinkStyles}
`

export const ExternalLink = styled.a`
    ${LinkStyles}
`