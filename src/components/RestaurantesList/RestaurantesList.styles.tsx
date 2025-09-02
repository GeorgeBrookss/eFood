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

  @media (min-width: 320px) and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`
export const ItemStyle = styled.li`
  width: 100%;
  max-width: 472px;
  height: 398px;
`
