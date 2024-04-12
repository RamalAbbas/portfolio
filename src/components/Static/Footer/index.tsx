import styled from 'styled-components'

import { SocialMedia } from '../index'
import { GrayLogo } from '../../Icons/index'
const Footer = () => {
  return (
    <Wrapper>
        <Left>
            <GrayLogo />
        </Left>

        <Contact>
            <ContactNumber>
                010-717-73-76
            </ContactNumber>

            <ContactEmail>
                ramalabbasov044@gmail.com
            </ContactEmail>

            <SocialMedia />
        </Contact>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 41px 230px 41px 177px;
`

const Left = styled.div`
    cursor: pointer;
`

const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
`

const ContactNumber = styled.p`
    color: #a7a7a7;
    font-size: 18px;
    font-weight: regular;
`
const ContactEmail = styled.p`
    color: #a7a7a7;
    font-size: 18px;
    font-weight: regular;
`