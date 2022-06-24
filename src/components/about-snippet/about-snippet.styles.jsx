import styled from "styled-components";


export const AboutPic = styled.img`
    width: ${props => props.imgWidth};
    height: auto;
    margin-bottom: 40px;
    margin-right: ${props => props.marginRight};
    align-self: center;
` 

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem;
`

export const AboutSnippetContainer = styled.div`
    padding: ${props => props.containerPadding};
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #c3d1dc;
    color: #0a4774;

    a {
        font-style: italic;
        color: #0a4774;
    }
`
export const Heading = styled.h2`
    font-size: calc(${props => props.fontFactor} * 1.75rem);
    margin-bottom: 2rem;
`

export const Paragraph = styled.p`
    font-size: calc(${props => props.fontFactor} * 1rem);
    line-height: 1.75rem;
    padding-top: 1rem;
`