import styled from 'styled-components'
import Cores from '../../Cores'

export const PratoItem = styled.li`
  width: 100%;
  max-width: 472px;
  background-color: ${Cores.laranja};
  position: relative;
  text-align: center;
  padding-top: 8px;
`
export const ItemTitulo = styled.div`
  color: ${Cores.creme};
`

export const AdicionarBtn = styled.button`
  background-color: ${Cores.creme};
  color: ${Cores.laranja};
  border: none;
  width: 304px;
  height: 24px;
  text-decoration: none;
  cursor: pointer;
  padding: 6px 4px;
  font-size: 14px;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 280px;
    font-size: 18px;
    height: 34px;
  }
`
export const ItemBorder = styled.div`
  border-top: none;
  height: 171px;
  background-color: ${Cores.branco};
  background-color: ${Cores.laranja};
`

export const Descricao = styled.p`
  margin: 8px;
  color: ${Cores.creme};
  margin-bottom: 16px;
`
