import styled from "styled-components";
import { Colors } from "../../assets/styling";

const { primary, secondary } = Colors

export const AboutPageContainer = styled.div`
    padding: 80px 40px;
    display: flex;
    flex-direction: ${props => props.pageFlow};
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${secondary};
    color: ${primary};

    img {
        width: 310px;
        height: auto;
        margin-bottom: 40px;
        align-self: center;
      }


`

export const Article = styled.article`
    margin: ${props => props.articleMargins};
    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.75rem;
        padding-top: 1rem;
    }
`