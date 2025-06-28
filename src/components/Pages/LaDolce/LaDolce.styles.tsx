import styled from 'styled-components'
import fundoDiv from '../../../assets/images/fundoRestaurante.png'
import Cores from '../../../Cores'

export const DestaqueStyled = styled.div`
  background-image: url(${fundoDiv});
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const TemaDoRestaurante = styled.h1`
  color: ${Cores.branco};
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
  margin-left: 170px;
  padding-top: 25px;
`
export const NomeDoRestaurante = styled.h1`
  color: ${Cores.branco};
  margin-left: 170px;
  font-size: 32px;
  font-weight: 900;
`
