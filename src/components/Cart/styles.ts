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
export const CloseX = styled.p`
  color: aliceblue;
  width: 500px;
  cursor: pointer;
`

export const Sidebar = styled.aside`
  background-color: ${Cores.laranja};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 70%;
  }

  h3 {
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 344px;
    width: 100%;
  }

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
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 10px;
    }
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
export const CartInfo = styled.div<{ $hidden: boolean }>`
  display: ${(props) => (props.$hidden ? 'none' : 'block')};
`
export const CartContent = styled.div<{ $hidden: boolean }>`
  display: ${(props) => (props.$hidden ? 'none' : 'block')};
  color: ${Cores.creme};
`

export const CartForm = styled.div<{ $show: boolean }>`
  display: ${(props) => (props.$show ? 'block' : 'none')};
  color: ${Cores.creme};
`
export const CardForm = styled.div<{ $show: boolean }>`
  display: ${(props) => (props.$show ? 'block' : 'none')};
  color: ${Cores.creme};
`

export const CartInfoList = styled.ul`
  color: ${Cores.creme};
  display: block;
  margin-top: 16px;
  font-weight: bold;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
  div {
    display: flex;
    li {
      margin-right: 20px;

      input {
        margin-top: 8px;
        height: 32px;
        max-width: 155px;
        @media (min-width: 320px) and (max-width: 767px) {
          height: 22px;
        }
      }
    }
  }

  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    input {
      margin-top: 8px;
      height: 32px;
      max-width: 344px;
      border: none;
      background-color: ${Cores.creme};
      padding: 8px;
      font-size: 14px;
      font-weight: bold;
      @media (min-width: 320px) and (max-width: 767px) {
        height: 22px;
      }
    }
  }
`
export const AdicionarBtnCart = styled.button`
  background-color: ${Cores.creme};
  color: ${Cores.laranja};
  border: none;
  width: 304px;
  height: 24px;
  text-decoration: none;
  cursor: pointer;
  padding: 6px 4px;
  font-size: 14px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 200px;
    font-size: 18px;
    height: 54px;
  }
`
export const FinalBtnForm = styled.button`
  background-color: ${Cores.creme};
  color: ${Cores.laranja};
  border: none;
  width: 304px;
  height: 34px;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  padding: 6px 4px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 200px;
    font-size: 10px;
    height: 24px;
  }
`

export const DivForm = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`

export const CardInfoList = styled.ul`
  color: ${Cores.creme};
  display: block;
  margin-top: 16px;
  font-weight: bold;
  div {
    display: flex;
    li {
      margin-right: 20px;

      input {
        margin-top: 8px;
        height: 32px;
        max-width: 155px;
      }
    }
  }

  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    input {
      margin-top: 8px;
      height: 32px;
      max-width: 344px;
      border: none;
      background-color: ${Cores.creme};
      padding: 8px;
      font-size: 14px;
      font-weight: bold;
    }
  }
`
