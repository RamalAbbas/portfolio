import styled from 'styled-components';


import { PinkLogo } from '../../Icons/index'
import { navbarLinks } from '../../../mock/index'
import { useGlobalStore } from '../../../provider/povider';

const Header = () => {
  const { theme } = useGlobalStore()

  const color = {
    color: theme == "light" ? "#181818" : '#F5F5F5'
  }

  const customWrapper = {
    backgroundColor: theme !== "light" ? "rgb(24, 24, 24)" : 'rgb(245, 245, 245)'
  }

  return (
    <Wrapper style={customWrapper}>
        <Left>
          <PinkLogo />
        </Left>

        <Right>
            <List>
                  {
                      navbarLinks.map((item) => (
                          <Item>
                              <Link style={color} href={item.hash}>
                                    {
                                      item.name
                                    }
                              </Link>
                          </Item>
                      ))
                  }
            </List>
        </Right>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 41px 0px 41px 0px;
    position: fixed;
    width: 100vw;
    z-index: 5;
`

const Left = styled.div`

`

const Right = styled.div`

`

const List = styled.ul`
    display: flex;
    gap: 50px;
`

const Item = styled.li``

const Link = styled.a`
    cursor: pointer;
    font-size: 20px;
    color: #a7a7a7;
    text-decoration: none;
`