import { useEffect, Fragment } from "react"
import { TestimonialCard, TestimonialCardContainer, TestimonialsPageContainer } from "./testimonials-page.styles"
import { Testimonials } from "../../assets/testimonials/testimonials"
import { Colors } from "../../assets/styling";
import WorkWithEd from "../../components/work-with-ed/work-with-ed.component";

const { primary } = Colors

const TestimonialsPage = ({setNavBackground, isDesktop, isLandscape}) => {

    const pagePadding = isDesktop ? '120px 40px' : '60px 40px'
    const cardFlow = isLandscape ? 'row' : 'column'

    useEffect(()=> {
        setNavBackground(primary)
    })

    return (
        <>
            <TestimonialsPageContainer pagePadding={pagePadding} >
                <h2>Testimonials</h2>
                <TestimonialCardContainer cardFlow={cardFlow} >
                    {Testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <h3>{testimonial.name}</h3>
                            <div>{testimonial.testimonial}</div>
                        </TestimonialCard>
                    ))}
                </TestimonialCardContainer>
                    
            </TestimonialsPageContainer>
            <WorkWithEd />        
        </>

    )
}

export default TestimonialsPage