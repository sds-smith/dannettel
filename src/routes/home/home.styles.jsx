import styled from 'styled-components'
import { Colors } from "../../assets/styling";

const { quinary } = Colors

export const HomeHero = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin-bottom: 15px;
`

export const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%; 
    overflow: hidden;
    z-index: -1;
`

export const BackgroundVideo = styled.video`
    min-width: 100%; 
    min-height: 100%; 
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
`

export const TitleContainer = styled.div`
    text-align: center;
    color: ${quinary};

    h1 {
        font-size: 72px;
        margin: 0px;
      }
      
    h2 {
        font-size: 16px;
        font-weight: 400;
        margin: 0px;
      }
`