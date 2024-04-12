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
    max-height: 567px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`

const ProjectImg = styled.img`
    width: 375px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`

const Bottom = styled.div`
    background: #363636;
    padding: 28px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`

const ProjectName = styled.p`
    font-size: 28px;
    font-weight: medium;
    color: #c7c5c5;
`

const ProjectTechnologies = styled.p`
    font-size: 16px;
    font-weight: regular;
    margin-top: 20px;
    color: #ccc;
`

const ProjectLinksBody = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
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