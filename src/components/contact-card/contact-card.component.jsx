
import {ContactCardContainer} from './contact-card.styles'

const ContactCard = ({color}) => {
    return (
        <ContactCardContainer color={color} >
            <h2 >Get in Touch with Ed</h2>
            <h3 >Ed Dannettel of Atlas Premier Realty</h3>
            <h4>MD License #625200 PA #RBR001960</h4>
            <p >47 E Main St<br/>Westminster, MD 21157</p>
            <a href='tel:14108617373' >Direct (410) 861-7373</a>
            <a href='tel:14108617373' >Office  (443) 487-6410</a>
            <a href='mailto:eddannettel3@gmail.com' >eddannettel3@gmail.com</a>
        </ContactCardContainer>
    )

}

export default ContactCard





