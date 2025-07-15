import styled from 'styled-components'
import Cores from '../../../Cores'

export const DestaqueStyled = styled.div<{ capaUrl?: string }>`
  height: 280px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative; /* Essencial para posicionar o overlay */
  color: #fff; /* Cor do texto sobre o overlay */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;

  background-image: ${({ capaUrl }) => (capaUrl ? `url(${capaUrl})` : 'none')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
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
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`
