import styled from 'styled-components'

import { SocialMedia } from '../index'
import { GrayLogo } from '../../Icons/index'
const Footer = () => {
  return (
    <Wrapper id='contact'>
        <Left>
            <GrayLogo />
        </Left>

        <Contact>
            <ContactNumber href='tel:010-717-73-76'>
                010-717-73-76
            </ContactNumber>

            <ContactEmail href="mailto:ramalabbasov044@gmail.com">
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

const ContactNumber = styled.a`
    color: #a7a7a7;
    font-size: 18px;
    font-weight: regular;
    text-decoration: none;
    
    &:hover{
        text-decoration: underline;
    }
`
const ContactEmail = styled.a`
    color: #a7a7a7;
    font-size: 18px;
    font-weight: regular;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`