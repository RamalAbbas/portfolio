import { Header , Footer , TechnologyCard , ProjectCard , ThemeSwitcher , Label , Input , Textarea } from './components/Static/index';
import { technologiesData , projectsData } from './mock/index';
import { useGlobalStore } from './provider/povider';
import userImage from '../public/user.jpeg';


import AOS from 'aos';
import emailjs from '@emailjs/browser'
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect , useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
    const form = useRef<HTMLFormElement>(null)
    const { theme } = useGlobalStore()

    //! UseEffect Aos Configuration 

    useEffect(() => {
        AOS.init({
            once: false,
        })
    }, [])

    // When be scroll out up
    window.onload = function() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth' 
      });
    };

    //! Send Email Data 

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!form.current) return;
      

      emailjs
        .sendForm('service_5mxrinc', 'template_bdnswbd', form.current, {
          publicKey: 'XLn0Tdu9pnvCxrtjz',
        })
        .then(
          () => {
            toast.success("Connection established")
          },
          (error) => {
            toast.success('FAILED...', error.text)
          },
        );
    };

    //! Dynamic Styles 

    const globalStyle = {
      backgroundColor: theme == "light" ? "#F5F5F5" : '#181818'
    };

    const aboutTitleColor = {
      color: theme == "light" ? "#181818" : '#d9d9d9'
    }

    const headTitleColor = {
      color: theme == "light" ? "#181818" : '#ccc'
    }

    const dynamicButtonStyles = {
      color: theme == "light" ? "#181818" : '#ccc',
      backgroundColor: theme !== "light" ?  "#333944" : "#fff"
    }

    return (
      <div style={globalStyle}>
        <Header />

        <Main className="content">
            <AboutMeBox id="about" className='about'>
                <AboutTitle data-aos="fade-right" className='about_title' style={aboutTitleColor}>
                    Hi 👋, <br></br>
                    <CyanText>My name is Ramal</CyanText> <br></br>
                    I build things for web
                </AboutTitle>

                <AboutImage
                    // src={userImage}
                    src=""
                    alt="userImage"
                    data-aos="fade-left"
                    className='userImage'
                />
            </AboutMeBox>

            <Technologies id="techstack">
                <HeadTitle data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='head_title' style={headTitleColor}>
                  My Tech Stack
                </HeadTitle>

                <HeadDescription data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='head_desc'>
                  Technologies I’ve been working with recently
                </HeadDescription>

                <TechnologiesCardBody data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='TechnologiesCardBody'>
                    {
                      technologiesData.map((info,index) => (
                        <TechnologyCard data={info} key={index} />
                      ))
                    }
                </TechnologiesCardBody>
            </Technologies>

            <Projects id="projects">
                <HeadTitle data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className='head_title' style={headTitleColor}>
                  Projects
                </HeadTitle>

                <HeadDescription data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className='head_desc'>
                  Things I’ve built so far
                </HeadDescription>

                <ProjectBoxBody  className='ProjectBoxBody'>
                      {
                          projectsData.map((item,index) => (
                            <ProjectCard key={index} data={item} />
                          ))
                      }
                </ProjectBoxBody>
            </Projects>

            <Contact id='contact'>
                    <HeadTitle data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className='head_title' style={headTitleColor}>
                        Contact
                    </HeadTitle>

                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <ContactItem>
                            <Label value={"Name"} forId={"user_name"} />
                            <Input type={"text"} id={"user_name"} name={"user_name"} placeholder={"Name"} />
                        </ContactItem>

                        <ContactItem>
                            <Label value={"Email"} forId={"user_email"} />
                            <Input type={"email"} id={"user_email"} name={"user_email"} placeholder={"Email"} />
                        </ContactItem>

                        <ContactItem>
                            <Label value={"Your Message"} forId={"message"} />
                            <Textarea id={"message"} name={"message"} placeholder={"Message"} />
                        </ContactItem>
                        
                        <FormBottom>
                            <SendButton style={dynamicButtonStyles} type="submit" value="Send" />
                        </FormBottom>
                    </ContactForm>
            </Contact>
        </Main>

        <Footer />
        <ThemeSwitcher />
        <ToastContainer />
      </div>
    )
}

export default App

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 143.5px 230px 0px 177px;
    
    @media screen and (max-width: 1350px){
        padding: 143.5px 70px 0px 70px !important;

        .TechnologiesCardBody{
          grid-template-columns: repeat(4,1fr)
        }

        .ProjectBoxBody{
          grid-template-columns: repeat(2,1fr)
        }

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
        padding: 143.5px 40px 0px 40px !important;

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
    border: 7px solid #23A6F0;
    object-fit: cover;
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

//! Contact

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 608px;
    width: 100%;
`

const ContactItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    margin-bottom: 20px;
`

const FormBottom = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const SendButton = styled.input`
    width: 128px;
    height: 48px;
    border: 0;
    border-radius: 8px;
    font-size: 17px;
    margin-right: -16px;
    cursor: pointer;
`