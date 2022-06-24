import { FooterContainer } from "./footer.styles"
import SocialButton from "../social-button/social-button.component"
import EmailIcon from '../../assets/icons/mail_white.png'
import PhoneIcon from '../../assets/icons/phone_white.png'
import LinkedinIcon from '../../assets/icons/linkedin_white.png'
import InstagramIcon from '../../assets/icons/instagram_white.png'
import FacebookIcon from '../../assets/icons/facebook_white.png'


const Footer = ({width}) => {
    return (
        <FooterContainer width={width} >
            <SocialButton imageSrc={EmailIcon} pathName={'mailto:eddannettel3@gmail.com'} target='_blank' />
            <SocialButton imageSrc={PhoneIcon} pathName={'tel:14108617373'} target='_blank' />
            <SocialButton imageSrc={LinkedinIcon} pathName={'https://www.linkedin.com/in/edward-dannettel-64b807224/'} target='_blank' />
            <SocialButton imageSrc={InstagramIcon} pathName={'https://www.instagram.com/eddannettel/'} target='_blank' />
            <SocialButton imageSrc={FacebookIcon} pathName={'https://www.facebook.com/ed.dannettel'} target='_blank' />
        </FooterContainer>
    )
}

export default Footer