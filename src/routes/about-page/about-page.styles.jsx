import styled from "styled-components";

export const AboutPageContainer = styled.div`
    min-height: 100vh;
    padding: 80px 40px;
    display: flex;
    flex-direction: ${props => props.pageFlow};
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #c3d1dc;
    color: #0a4774;

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