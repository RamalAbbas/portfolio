import styled from "styled-components"
import { Github, Switch } from "../../Icons"
import { useNavigate } from "react-router-dom"

const ProjectCard = ({ data }) => {
  const navigate = useNavigate()
  return (
    <Box>
        <ProjectImg
            src={data.image}
        />

        <Bottom>
            <Top>
              <ProjectName>
                  {
                    data.name
                  }
              </ProjectName>

              <ProjectTechnologies>
                Tech stack :
                <span style={{fontSize:"14px"}}>
                  {
                    data.technologies
                  } 
                </span>
              </ProjectTechnologies>
            </Top>

            <ProjectLinksBody>
                <DemoLink>
                  <Switch />

                  <SwitchLink onClick={() => navigate(data.vercelLink)}>
                    Live Preview
                  </SwitchLink>
                </DemoLink>

                <GithubLink>
                    <Github />

                    <SwitchLink onClick={() => navigate(data.githubLink)}>
                      Live Preview
                    </SwitchLink>
                </GithubLink>
            </ProjectLinksBody>
        </Bottom>
    </Box>
  )
}

export default ProjectCard

const Box = styled.div`
    max-width: 375px;
    width: 100%;
    height: 500px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`

const ProjectImg = styled.img`
    width: 375px;
    height: 250px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`

const Bottom = styled.div`
    background: #363636;
    padding: 0px 28px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 100%;
    max-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProjectName = styled.p`
    font-size: 28px;
    font-weight: medium;
    color: #c7c5c5;
`

const ProjectTechnologies = styled.p`
    font-size: 16px;
    font-weight: regular;
    color: #ccc;
`

const ProjectLinksBody = styled.div`
    display: flex;
    justify-content: space-between;
`

const DemoLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const SwitchLink = styled.p`
    font-size: 14px;
    text-decoration: underline;
    color: #fff;
    cursor: pointer;
`

const GithubLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px
`