import styled from 'styled-components'

export const ListaStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  max-width: 1024px;
  width: 100%;
  justify-self: center;
  list-style: none;
  margin-top: 128px;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    max-width: 700px;
  }
`
