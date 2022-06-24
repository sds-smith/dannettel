import { Fragment, useEffect } from 'react'
import LinkButton from '../../components/link/link.component';
import { HomeHero, VideoContainer, BackgroundVideo, ButtonsContainer, TitleContainer } from './home.styles';
import Video from '../../assets/videoblocks-4k-footage-of-an-american-suburban-home-surrounded-by-evergreen-trees-aerial-view-with-drop-down-approach-to-ground-level_swemavmoxs__c69105341e6578002f81adfe1b07cee2__P360.mp4'
import AboutSnippet from '../../components/about-snippet/about-snippet.component';
import TestimonialsSnippets from '../../components/testimonials-snippets/testimonials-snippets.component';
import WorkWithEd from '../../components/work-with-ed/work-with-ed.component';

function Home({setNavBackground, isDesktop}) {

    const tagLine = isDesktop ? 'Maryland and Pennsylvania Real Estate' : 'MD & PA Real Estate'

    useEffect(()=> {
        setNavBackground('unset')
    })

    return (
      <Fragment >
        <HomeHero>
            <VideoContainer>
                <BackgroundVideo autoPlay muted loop playsInline >
                    <source src={Video} type="video/mp4" />
                </BackgroundVideo>
            </VideoContainer>
            <TitleContainer>
                <h2 >{tagLine}</h2>
                <h1>Ed Dannettel</h1>
            </TitleContainer>
            <ButtonsContainer>
                <LinkButton to='/contact' >Home Valuation</LinkButton>
                <LinkButton to='/contact' >Contact</LinkButton>
            </ButtonsContainer>
        </HomeHero>
        <AboutSnippet isDesktop={isDesktop} />
        <TestimonialsSnippets />
        <WorkWithEd />
      </Fragment>
    );
  }
  
  export default Home;