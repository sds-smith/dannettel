import styled from "styled-components";
import { Colors } from "../../assets/styling";

const { primary, quaternary } = Colors

export const TestimonialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
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

        &:hover {
            .quote {
                font-style: italic;
                text-decoration: underline;
            }
            .attribution {
                font-style: normal;
                text-decoration: underline;
            }
        }
    }
 
`

export const ArrowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
        border: none;
        background-color: ${quaternary};
        color: ${primary};
    }
`