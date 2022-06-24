import styled from "styled-components";

export const TestimonialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
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
        background-color: #F9F6F0;
        color: #0a4774;
    }
`