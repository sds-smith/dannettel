import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../assets/styling";

const {quinary} = Colors

export const LinkBtn = styled(Link)`
    border: 1px solid ${quinary};
    margin: 16px;
    padding: 16px;
    width: 240px;
    height: auto;
    text-align: center;
    text-decoration: none;
    color: ${quinary};
`