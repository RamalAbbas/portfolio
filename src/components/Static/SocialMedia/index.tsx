import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { DarkGithub , Linkedln } from "../../Icons"

const SocialMedia = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Github onClick={() => navigate("https://github.com/ramalabbasov044")}>
                <DarkGithub/>
            </Github>

            <LinkedlnBox onClick={() => navigate("https://www.linkedin.com/in/ramal-abbasov-504b35242/")}>
                <Linkedln />
            </LinkedlnBox>
        </Wrapper>
    )
}

export default SocialMedia

const Wrapper = styled.div`
    display: flex;
    gap: 18px;
`

const Github = styled.div`
    cursor: pointer;
`

const LinkedlnBox = styled.div`
    cursor: pointer;
`