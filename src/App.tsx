import styled from 'styled-components'

import { Header } from './components/Static/index'
import { technologiesData , projectsData } from './mock/index'
import './assets/css/reset.css'
import TechnologoyCard from './components/Static/TechnologyCard'
import { useNavigate } from 'react-router-dom'
import ProjectCard from './components/Static/ProjectCard'


const App = () => {
  const navigate = useNavigate()

  const forwardFunc = (link: string) => {
    navigate(link)
  }

  return (
    <>
      <Header />

        <Main>
            <AboutMeBox>
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

            <Technologies>
                <HeadTitle>
                  My Tech Stack
                </HeadTitle>

                <HeadDescription>
                  Technologies I’ve been working with recently
                </HeadDescription>

                <TechnologiesCardBody>
                    {
                      technologiesData.map((info,index) => (
                        <TechnologoyCard data={info} key={index} forwardFunc={forwardFunc} />
                      ))
                    }
                </TechnologiesCardBody>
            </Technologies>

            <Projects>
                <HeadTitle>
                  Projects
                </HeadTitle>

                <HeadDescription>
                  Things I’ve built so far
                </HeadDescription>

                <ProjectBoxBody>
                      {
                          projectsData.map((item,index) => (
                            <ProjectCard data={item} />
                          ))
                      }
                </ProjectBoxBody>
            </Projects>
        </Main>
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

const AboutMeBox = styled.div`
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

const Technologies = styled.div`
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

const Projects = styled.div`
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