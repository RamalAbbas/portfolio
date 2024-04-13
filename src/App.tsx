import styled from 'styled-components'

import { Header , Footer , TechnologyCard , ProjectCard , ThemeSwitcher } from './components/Static/index'
import { technologiesData , projectsData } from './mock/index'
import { useGlobalStore } from './provider/povider'
import './assets/css/reset.css'


const App = () => {
  const { theme } = useGlobalStore()

  const globalStyle = {
    backgroundColor: theme == "light" ? "#F5F5F5" : '#181818'
  };

  const aboutTitleColor = {
    color: theme == "light" ? "#181818" : '#d9d9d9'
  }

  const headTitleColor = {
    color: theme == "light" ? "#181818" : '#ccc'
  }

  return (
    <div style={globalStyle}>
      <Header />

        <Main className="content">
            <AboutMeBox id="about" className='about'>
                <AboutTitle className='about_title' style={aboutTitleColor}>
                    Hi 👋, <br></br>
                    <CyanText>My name is Ramal</CyanText> <br></br>
                    I build things for web
                </AboutTitle>

                <AboutImage
                    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    alt="userImage"
                    className='userImage'
                />
            </AboutMeBox>

            <Technologies id="techstack">
                <HeadTitle className='head_title' style={headTitleColor}>
                  My Tech Stack
                </HeadTitle>

                <HeadDescription className='head_desc'>
                  Technologies I’ve been working with recently
                </HeadDescription>

                <TechnologiesCardBody className='TechnologiesCardBody'>
                    {
                      technologiesData.map((info,index) => (
                        <TechnologyCard data={info} key={index} />
                      ))
                    }
                </TechnologiesCardBody>
            </Technologies>

            <Projects id="projects">
                <HeadTitle className='head_title' style={headTitleColor}>
                  Projects
                </HeadTitle>

                <HeadDescription className='head_desc'>
                  Things I’ve built so far
                </HeadDescription>

                <ProjectBoxBody className='ProjectBoxBody'>
                      {
                          projectsData.map((item) => (
                            <ProjectCard data={item} />
                          ))
                      }
                </ProjectBoxBody>
            </Projects>
        </Main>

      <Footer />
      <ThemeSwitcher />
    </div>
  )
}

export default App

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 143.5px 230px 0px 177px;
    

    @media screen and (max-width: 1350px){
        .TechnologiesCardBody{
          grid-template-columns: repeat(4,1fr)
        }

        .ProjectBoxBody{
          grid-template-columns: repeat(2,1fr)
        }

        padding: 143.5px 70px 0px 70px !important;
    }

    @media screen and (max-width: 1200px){
        .about_title{
            font-size: 45px;
        }

        .userImage{
            width: 270px;
            height: 270px;
        }
    }

    @media screen and (max-width: 992px){
        .about{
            flex-direction: column;
            text-align: center;
            gap: 30px;
        }

        .TechnologiesCardBody{
          grid-template-columns: repeat(3,1fr)
        }
    }

    @media screen and (max-width: 850px){
        .ProjectBoxBody{
          grid-template-columns: repeat(1,1fr)
        }
    }

    @media screen and (max-width: 769px) {
        .head_title{
          font-size: 29px;
          text-align: center;
        }

        .head_desc{
            font-size: 20px;
            text-align: center;
        } 

        .TechnologiesCardBody div img{
            width: 80px;
            height: 80px;
        }
    }

    @media screen and (max-width: 580px) {
        .TechnologiesCardBody div img{
            width: 60px;
            height: 60px;
        }

        .about_title{
            font-size: 30px;
            line-height: 50px;
        }
    }

    @media screen and (max-width: 500px){
        .TechnologiesCardBody{
          grid-template-columns: repeat(2,1fr)
        }
    }

    @media screen and (max-width: 650px){
      
    }
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