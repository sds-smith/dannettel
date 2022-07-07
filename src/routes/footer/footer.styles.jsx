import styled from "styled-components";

export const FooterContainer = styled.div`
    min-height: 400px;
    background-color: black;
    color: white;
    margin: 5px 0px;
    padding: ${props => props.isDesktop ? '0px' : '20px 0px 80px 0px'};
    display: flex;
    flex-direction: ${props => props.isDesktop ? 'row' : 'column-reverse'};
    justify-content: space-around;
    align-items: center;
`
export const LogoContainer = styled.div`
    display: flex;

    img {
        height: 80px;
        width: auto;
        margin: 20px;
    }
`