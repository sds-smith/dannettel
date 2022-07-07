import styled from "styled-components";
import { Colors } from "../../assets/styling";

const { primary, quinary } = Colors

export const SocialContainer = styled.div`
    height: 42px;
    width: ${props => props.width}};
    position: fixed;
    bottom: 3%;
    left: calc(${props => `(100% - ${props.width}) / 2`});
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${primary};
    color: ${quinary};
    text-align: center;
    z-index: 10;
`