import styled from "styled-components";
import { Colors } from "../../assets/styling";

const { primary } = Colors

export const ContactCardContainer = styled.div`

    color: ${props => props.color || primary};

    p {
        margin-bottom: 10px;
    }

    a {
        display: block;
        text-decoration: none;
        margin-bottom: 5px;
        color: ${props => props.color || primary};

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

    h4 {
        margin-bottom: 10px;
    }
`