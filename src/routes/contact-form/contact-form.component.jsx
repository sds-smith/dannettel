import { useState } from "react"
import { CloseButton, ContactFormContainer, ContactForm } from "./contact-form.styles"
import Button from '../../components/button/button.component'
import Footer from '../../components/footer/footer.component'
import CloseIconBlue from '../../assets/icons/close_darkblue.svg'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ContactPage = ({isDesktop}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const thankyou = `Thank you, ${firstName}.`
    const submitted = 'Your form has been submitted.'

    const pagePadding = isDesktop ? '30px 30px 30px 30%' : '30px'
    const formWidth = isDesktop ? '50%' : 'unset'

    const handleSubmit = e => {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 
                        "form-name": "contact", 
                        "first-name": firstName,
                        "last-name": lastName,
                        "email": email,
                        "phone": phone,
                        "message": message
                     })
        })
          .then(() => {
                  window.alert(thankyou + '\n' + submitted)
        })
          .catch(error => alert(error));
          document.querySelectorAll('.input').forEach(element => element.value = '')
      };
  
    const handleChangeFirstName = e => setFirstName(e.target.value);
    const handleChangeLastName = e => setLastName(e.target.value);
    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangePhone = e => setPhone(e.target.value);
    const handleChangeMessage = e => setMessage(e.target.value);

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
            <ContactForm className='form' onSubmit={handleSubmit} formWidth={formWidth} >
                <input type='text' placeholder='Your First Name' name='first-name' value={firstName} className='input'required onChange={handleChangeFirstName}/>
                <input type='text' placeholder='Your Last Name' name='last-name' value={lastName} className='input'required onChange={handleChangeLastName}/>
                <input type='email' placeholder='Your Email Address' name='email' value={email} className='input'required onChange={handleChangeEmail}/>
                <input type='tel' placeholder="Your Phone Number" name='phone' value={phone} className='input' onChange={handleChangePhone} />
                <textarea rows="8" cols="33" placeholder='Message' name='message' value={message} className='input' onChange={handleChangeMessage} />
                <Button type='submit' >Contact</Button>
            </ContactForm>
            {isDesktop && <Footer width='40%' />}
        </ContactFormContainer>
    )
}

export default ContactPage