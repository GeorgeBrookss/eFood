import styled from 'styled-components'
import Cores from '../../Cores'
import { AdicionarBtn } from '../Prato/prato.styles'
import closeCart from '../../assets/images/closeCart.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${Cores.laranja};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${AdicionarBtn} {
    max-width: 100%;
    width: 100%;
  }
`

export const Preco = styled.p`
  font-weight: bold;
  width: 100%;
  font-size: 14px;
  color: ${Cores.branco};
  width: fit-content;
  span {
    display: block;
    font-size: 12px;
    color: ${Cores.creme};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.branco};
`
export const CartItem = styled.li`
  background-color: ${Cores.creme};
  display: flex;
  padding: 8px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Cores.creme};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 0 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${Cores.laranja};
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${Cores.laranja};
  }

  button {
    background-image: url(${closeCart});
    width: 16px;
    height: 16px;
    border: none;
    margin-top: 76px;
    margin-right: 8px;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
  }
`
export const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
