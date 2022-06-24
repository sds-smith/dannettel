import { useState } from "react"
import { Link } from "react-router-dom"
import { Testimonials } from "../../assets/testimonials/testimonials"
import { ArrowContainer, TestimonialsContainer } from "./testimonials-snippets.styles"
import LeftArrow from '../../assets/icons/left_arrow.png'
import RightArrow from '../../assets/icons/right_arrow.png'

const TestimonialsSnippets = () => {

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const advanceTestimonials = () => {
        setCurrentTestimonial(currentTestimonial === Testimonials.length-1 ? 0 : currentTestimonial + 1)
    }

    const reverseTestimonials = () => {
        setCurrentTestimonial(currentTestimonial === 0 ? Testimonials.length-1 : currentTestimonial - 1)
    }

    return (
        <TestimonialsContainer>
            <h2>Testimonials</h2>
            <Link className='link' to={'/testimonials'} >
                <p className="quote">{Testimonials[currentTestimonial].snippet}</p>
                <p className="attribution">-{Testimonials[currentTestimonial].name}</p>
            </Link>

            <ArrowContainer>
                <button onClick={reverseTestimonials} ><img src={LeftArrow} alt='button to scroll left' /></button>
                <button onClick={advanceTestimonials} ><img src={RightArrow} alt='button to scroll right' /></button>
            </ArrowContainer>
        </TestimonialsContainer>
    )
}

export default TestimonialsSnippets