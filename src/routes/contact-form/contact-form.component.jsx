import { CloseButton, ContactFormContainer, ContactForm } from "./contact-form.styles"
import Button from '../../components/button/button.component'
import Footer from '../../components/footer/footer.component'
import CloseIconBlue from '../../assets/icons/close_darkblue.svg'

const ContactPage = ({isDesktop}) => {

    const pagePadding = isDesktop ? '30px 30px 30px 30%' : '30px'
    const formWidth = isDesktop ? '50%' : 'unset'

    return (
        <ContactFormContainer pagePadding={pagePadding} >
            <CloseButton to='/' ><img src={CloseIconBlue} alt='button to close form' /></CloseButton>
            <h2 >Get in Touch with Ed</h2>
            <h3 >Atlas</h3>
            <p >47 E Main St</p>
            <p >Westminster, MD 21157</p>
            <h3 >Ed Dannettel of Atlas</h3>
            <a href='mailto:eddannettel3@gmail.com' >eddannettel3@gmail.com</a>
            <a href='tel:14108617373' >(410) 861-7373</a>
            <ContactForm formWidth={formWidth} >
                <input type='text' placeholder="Name" />
                <input type='email' placeholder="Email" />
                <input type='tel' placeholder="Phone" />
                <textarea rows="8" cols="33" placeholder='Message' />
                <Button type='submit' >Contact</Button>
            </ContactForm>
            {isDesktop && <Footer width='40%' />}
        </ContactFormContainer>
    )
}

export default ContactPage