import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../assets/styling";

const { primary, quaternary } = Colors
//rgba(195, 209, 220, 0.5) === secondary with alpha value for opacity adjustment

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
    color: ${primary};
    background-color: ${quaternary};
    padding: ${props => props.pagePadding};

    a {
        text-decoration: none;
        color: ${primary};

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
    background-color: ${quaternary};
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
            color: ${primary};
        }
    }

    textarea {
        border: 0.5px solid ${primary};
        background-color: rgba(195, 209, 220, 0.5); 

        ::placeholder {
            color: ${primary};
        }
    }

    Button {
        margin-top: 40px;
    }
` 