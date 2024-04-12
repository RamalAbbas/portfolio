import styled from 'styled-components'

import { Header , Footer , TechnologyCard , ProjectCard } from './components/Static/index'
import { technologiesData , projectsData } from './mock/index'
import './assets/css/reset.css'


const App = () => {
  return (
    <>
      <Header />

        <Main>
            <AboutMeBox id="about">
                <AboutTitle>
                    Hi 👋, <br></br>
                    <CyanText>My name is Ramal</CyanText> <br></br>
                    I build things for web
                </AboutTitle>
                <AboutImage
                    src=""
                    alt=""
                />
            </AboutMeBox>

            <Technologies id="techstack">
                <HeadTitle>
                  My Tech Stack
                </HeadTitle>

                <HeadDescription>
                  Technologies I’ve been working with recently
                </HeadDescription>

                <TechnologiesCardBody>
                    {
                      technologiesData.map((info,index) => (
                        <TechnologyCard data={info} key={index} />
                      ))
                    }
                </TechnologiesCardBody>
            </Technologies>

            <Projects id="projects">
                <HeadTitle>
                  Projects
                </HeadTitle>

                <HeadDescription>
                  Things I’ve built so far
                </HeadDescription>

                <ProjectBoxBody>
                      {
                          projectsData.map((item) => (
                            <ProjectCard data={item} />
                          ))
                      }
                </ProjectBoxBody>
            </Projects>
        </Main>

      <Footer />
    </>
  )
}

export default App

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0px 230px 0px 177px;
`



//! About User  

const AboutMeBox = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0px 100px 0px;
`

const AboutTitle = styled.p`
    color: #d9d9d9;
    font-size: 58px;
    font-weight: bold;
    line-height: 70px;
`

const AboutImage = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    border: 7px solid #23A6F0
`



//! Techonologies

const Technologies = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
`

const HeadTitle = styled.p`
    font-weight: bold;
    font-size: 48px;
    color: #ccc;
`

const HeadDescription = styled.p`
    font-style: regular;
    font-size: 32px;
    color: #a0a0a0;
    margin-top: 40px;
`

const TechnologiesCardBody = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 120px;
    margin-top: 100px;
`

const CyanText = styled.span`
  color: #2a9eec
`



//! Projects

const Projects = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
`

const ProjectBoxBody = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 35px;
    margin-top: 50px;
`