import styled from 'styled-components'
import Cores from '../../Cores'

export const PratosListaStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px 32px;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  justify-self: center;
  list-style: none;
  margin-top: 128px;

  img {
    max-width: 304px;
    min-width: 304px;
    max-height: 167px;
    min-height: 167px;
  }
`
export const PratoItemStyle = styled.li`
  width: 100%;
  max-width: 320px;
  height: 338px;
`
export const TituloPrato = styled.h2`
  color: ${Cores.creme};
  text-align: left;
  margin: 8px;
  font-size: 16px;
  font-weight: 900;
`
