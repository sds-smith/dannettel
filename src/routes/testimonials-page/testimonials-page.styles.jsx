import styled from "styled-components";
import { Colors } from "../../assets/styling";

const { primary, quaternary } = Colors

export const TestimonialsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.pagePadding};
    color: ${primary};
    background-color: ${quaternary};


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
            color: ${primary};
        }
    
        .attribution {
            font-style: italic;
        }
    }
 
`

export const TestimonialCard = styled.div`
    width: 310px;
    height: 390px;
    overflow: scroll;
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
    flex-wrap: wrap;
`