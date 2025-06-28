import styled from 'styled-components'
import Cores from '../../Cores'

export const FooterStyle = styled.footer`
  text-align: center;
  margin: 0 auto;
  margin-top: 160px;
  background-color: ${Cores.footer};
  height: 298px;
`

export const LogoFooter = styled.img`
  margin-top: 40px;
`
export const RedesSociais = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 32px;
`
export const ItemRedes = styled.a`
  margin-left: 8px;
`

export const TextFooter = styled.p`
  color: ${Cores.laranja};
  font-weight: 400;
  font-size: 10px;
  width: 480px;
  margin: 80px auto;
`
