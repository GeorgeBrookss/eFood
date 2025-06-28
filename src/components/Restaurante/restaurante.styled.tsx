import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Cores from '../../Cores'

export const RestauranteItem = styled.li`
  width: 100%;
  max-width: 472px;
  position: relative;
`
export const TituloRestaurante = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding-top: 8px;
  margin-left: 7px;
  justify-content: space-between;
  margin-right: 8px;
  color: ${Cores.laranja};
`
export const ItemTitulo = styled.div`
  display: flex;
`

export const RestauranteButton = styled(Link)`
  background-color: ${Cores.laranja};
  color: white;
  border: none;
  width: 82px;
  height: 24px;
  text-decoration: none;
  cursor: pointer;
  padding: 6px 4px;
  font-size: 14px;
  margin-left: 8px;
`

export const Estrela = styled.img`
  margin-left: 8px;
`
export const ItemBorder = styled.div`
  border: 1px solid ${Cores.laranja};
  border-top: none;
  height: 171px;
  background-color: ${Cores.branco};
`

export const Descricao = styled.p`
  margin: 8px;
  margin-bottom: 16px;
  color: ${Cores.laranja};
  font-size: 14px;
`

export const Infos = styled.div`
  top: 16px;
  position: absolute;
  right: 16px;
`
