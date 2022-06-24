
import { Link } from 'react-router-dom'
import { AboutEd } from '../../assets/about/about-ed'
import { AboutSnippetContainer,AboutPic, Article, Heading, Paragraph } from './about-snippet.styles'
import Fam from '../../assets/photos/Fam.png'

const AboutSnippet = ({isDesktop}) => {

    const imgWidth = isDesktop ? '33%' : '100%'
    const marginRight = isDesktop ? '80px' : '0px'
    const flexDirection = isDesktop ? 'row' : 'column'
    const containerPadding = isDesktop ? '180px 120px 120px 120px' : '40px 40px 80px 40px'
    const fontFactor = isDesktop ? 1.25 : 1
    const p2 = isDesktop ? AboutEd.paragraph2 : 'At an early age Ed.'

    return (
        <AboutSnippetContainer containerPadding={containerPadding} flexDirection={flexDirection} >
            <AboutPic imgWidth={imgWidth} marginRight={marginRight} src={Fam} alt='casual selfie Ed with family' />
            <Article >
                <Heading fontFactor={fontFactor} >Meet Ed Dannettel</Heading>
                <Paragraph fontFactor={fontFactor} >{AboutEd.paragraph1}</Paragraph>
                <Paragraph fontFactor={fontFactor} >{p2} . . <Link to='/about'>(more)</Link></Paragraph>
            </Article>

        </AboutSnippetContainer>
    )
}

export default AboutSnippet