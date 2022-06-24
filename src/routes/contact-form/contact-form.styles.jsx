import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactFormContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 11;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    color: #0a4774;
    background-color: #F9F6F0;
    // padding: 30px 30px 30px 200px;
    padding: ${props => props.pagePadding};

    a {
        text-decoration: none;
        color: #0a4774;

        &:hover {
            font-style: italic;
            text-decoration: underline;
        }
    }

    h2 {
        font-size: 25px;
        margin-bottom: 25px;
    }

    h3 {
        font-weight: bold;
        margin: 10px 0px;
    }
`

export const CloseButton = styled(Link)`
    border: none;
    background-color: #F9F6F0;
    align-self: flex-end;
    height: 40px;
    width: 40px;
    margin-bottom: 80px;

    img {
        height: 100%;
    }
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    width: ${props => props.formWidth};
    margin: 50px 0px;

    input {
        margin-bottom: 20px;
        height: 30px;
        border: 0.5px solid #0a4774;
        background-color: rgba(195, 209, 220, 0.5);

        ::placeholder {
            color: #0a4774;
        }
    }

    textarea {
        border: 0.5px solid #0a4774;
        background-color: rgba(195, 209, 220, 0.5);

        ::placeholder {
            color: #0a4774;
        }
    }

    Button {
        margin-top: 40px;
    }
` 