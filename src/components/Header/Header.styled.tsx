import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import CartMob from '../../assets/images/cartMobile.png'
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
  margin-left: 20px;
  margin-right: 10px;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-left: 20px;
    margin-right: 10px;
    font-size: 17px;
  }
`

export const CarrinhoStyled = styled.p`
  cursor: pointer;
  font-weight: 900;
  color: ${Cores.laranja};
  font-size: 18px;
  margin-right: 20px;

  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`
export const CarrinhoMobile = styled.div`
  display: none;
  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    background-image: url(${CartMob});
    min-width: 40px;
    min-height: 40px;
    margin-right: 20px;
    margin-left: 20px;
    background-size: contain;
  }
`
export const Logo = styled.img`
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100px;
  }
`
