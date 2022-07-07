
import EqualHousing from '../../assets/icons/equal_housing.jpeg'
import Realtor from '../../assets/icons/realtor.jpeg'

import ContactCard from "../../components/contact-card/contact-card.component";

import { FooterContainer, LogoContainer } from "./footer.styles";

const Footer = ({isDesktop}) => {
    return (
        <FooterContainer isDesktop={isDesktop}>
            <LogoContainer >
                <img src={Realtor} alt='National Association of Realtors' />
                <img src={EqualHousing} alt='Equal Housing Opportunity' />
            </LogoContainer>
            <ContactCard color='white' />
        </FooterContainer>
    )
}

export default Footer