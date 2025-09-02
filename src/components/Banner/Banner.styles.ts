import styled from 'styled-components'
import Cores from '../../Cores'
export const BannerStyle = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export const Container = styled.div`
  display: block;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 539px;
  width: 100%;
`
export const Logo = styled.img`
  margin-top: 63px;
  margin-bottom: 138.5px;
`
export const TextoInicial = styled.h1`
  color: ${Cores.laranja};
  font-weight: 900;
  font-size: 36px;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 25px;
  }
`
