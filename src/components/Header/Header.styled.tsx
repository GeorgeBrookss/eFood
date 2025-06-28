import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import Cores from '../../Cores'

export const NavStyled = styled.nav`
  background-image: url(${fundo});
  margin-top: 0;
`

export const Menu = styled.ul`
  background-size: cover;
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 186px;
  list-style: none;
`
export const ReturnButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  font-weight: 900;
  color: ${Cores.laranja};
`

export const CarrinhoStyled = styled.p`
  font-weight: 900;
  color: ${Cores.laranja};
  font-size: 18px;
`
