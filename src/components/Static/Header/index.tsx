import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';


import { PinkLogo } from '../../Icons/index'
import { navbarLinks } from '../../../mock/index'
import { useGlobalStore } from '../../../provider/povider';

const Header = () => {
  const { theme } = useGlobalStore()
  const navigate = useNavigate()

  const color = {
    color: theme == "light" ? "#181818" : '#F5F5F5'
  };
  return (
    <Wrapper>
        <Left>
          <PinkLogo />
        </Left>

        <Right>
            <List>
                {
                  navbarLinks.map((item) => (
                      <Item>
                        <Link style={color} onClick={() => navigate(item.hash)}>
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
    justify-content: space-between;
    padding: 41px 230px 41px 177px;

    
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

const Link = styled.p`
  cursor: pointer;
  font-size: 20px;
  color: #a7a7a7;
`