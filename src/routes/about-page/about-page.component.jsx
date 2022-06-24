import { useEffect } from 'react'
import { AboutEd } from '../../assets/about/about-ed'
import { AboutPageContainer, Article } from './about-page.styles'
import EdEddie from '../../assets/photos/Ed_Eddie.png'
import { Colors } from "../../assets/styling";

const { primary } = Colors

const AboutPage = ({setNavBackground, isDesktop}) => {

    const pageFlow = isDesktop ? 'row' : 'column'
    const articleMargins = isDesktop ? '140px' : 'unset'
    useEffect(()=> {
        setNavBackground(primary)
    })

    return (

        <AboutPageContainer pageFlow={pageFlow} >
            <img src={EdEddie} alt='casual selfie Ed with Little Eddie' />
            <Article articleMargins={articleMargins} >
                <h2>Meet Ed Dannettel</h2>
                <p>{AboutEd.paragraph1}</p>
                <p>{AboutEd.paragraph2}</p>
                <p>{AboutEd.paragraph3}</p>
                <p>{AboutEd.paragraph4}</p>
                <p>{AboutEd.paragraph5}</p>
            </Article>

        </AboutPageContainer>
    )
}

export default AboutPage