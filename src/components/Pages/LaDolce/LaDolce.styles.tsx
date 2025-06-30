import styled from 'styled-components'
import fundoDiv from '../../../assets/images/fundoRestaurante.png'
import Cores from '../../../Cores'

export const DestaqueStyled = styled.div`
  background-image: url(${fundoDiv});
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const TemaDoRestaurante = styled.h3`
  color: ${Cores.branco};
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
  padding-top: 25px;
`
export const NomeDoRestaurante = styled.h1`
  color: ${Cores.branco};
  font-size: 32px;
  font-weight: 900;
`

export const ContainerStyle = styled.div`
  min-width: 1024px;
  justify-self: center;
`
