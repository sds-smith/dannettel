import styled from "styled-components";
import BackgroundImage from '../../assets/photos/pexels-curtis-adams-3288103.jpg'
import { Colors } from "../../assets/styling";

const { quinary } = Colors

export const WorkWithEdContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: ${quinary};
    padding: 40px;

    h2 {
        font-size: 30px;
        margin: 20px;
    }
`