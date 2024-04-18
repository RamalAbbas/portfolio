import styled from "styled-components"

import { DarkGithub , Linkedln } from "../../Icons"

const SocialMedia = () => {
    return (
        <Wrapper>
            <Github onClick={() => window.open("https://github.com/ramalabbasov044", "_blank")}>
                <DarkGithub/>
            </Github>

            <LinkedlnBox onClick={() => window.open("https://www.linkedin.com/in/ramal-abbasov-504b35242/", "_blank")}>
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

    &:hover{
        transform: scale(1.1);
    }
`

const LinkedlnBox = styled.div`
    cursor: pointer;
    
    &:hover{
        transform: scale(1.1);
    }
`