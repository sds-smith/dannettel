import styled from "styled-components";

export const TestimonialsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 60px);
    padding: ${props => props.pagePadding};
    color: #0a4774;
    background-color: #F9F6F0;


    h2 {
        font-size: 1.5rem;
        text-decoration: underline;
        margin: 15px;
    }

    .link {
        text-decoration: none;

        p {
            margin: 10px;
            text-align: center;
            color: #0a4774;
        }
    
        .attribution {
            font-style: italic;
        }
    }
 
`

export const TestimonialCard = styled.div`
    width: 310px;
    height: fit-content;
    padding: 20px;
    border-radius: 10px;
    margin: 10px;
    background-color: #c3d1dc;
    box-shadow: 5px 5px 5px #0a4774;

    h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`

export const TestimonialCardContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.cardFlow};
`