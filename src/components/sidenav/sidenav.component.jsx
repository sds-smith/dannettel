import { HeadshotContainer, NavLinksContainer, SideNavContainer, NavLink, ExternalLink } from './sidenav.styles'
import EdHeadshot from '../../assets/photos/Ed_Headshot_copy.png'
import Footer from '../footer/footer.component'

const SideNav = ({isOpenMenu, isDesktop, isLandscape, toggleHamburger}) => {

    const zIndex = isOpenMenu ? 9 : -9
    const opacity = isOpenMenu ? 1 : 0

    const pageFlow = isLandscape && !isDesktop ? 'row' : 'column'
    const justifyContent = isLandscape && !isDesktop ? 'space-evenly' : 'unset'
    const padding = isLandscape && !isDesktop ? '0px' : '100px'

    return (
        <SideNavContainer zIndex={zIndex} opacity={opacity} pageFlow={pageFlow} justifyContent={justifyContent} padding={padding} >
                <HeadshotContainer>
                    <img src={EdHeadshot} alt='Ed headshot' />
                </HeadshotContainer>
                <NavLinksContainer>
                    <NavLink to="/" onClick={toggleHamburger} >Home</NavLink>
                    <NavLink to="/about" onClick={toggleHamburger} >About</NavLink>
                    <NavLink to="/testimonials" onClick={toggleHamburger} >Testimonials</NavLink>
                    <ExternalLink href="https://edannettel.idx.atlaspremierrealty.com/property-search/search-form/" target='_blank' onClick={toggleHamburger} >Search Listings</ExternalLink>
                    <NavLink to="/contact" onClick={toggleHamburger} >Contact</NavLink>
                </NavLinksContainer>
                {isDesktop && <Footer width='40%' />}
        </SideNavContainer>
    )
}

export default SideNav