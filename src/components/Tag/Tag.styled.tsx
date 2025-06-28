import styled from 'styled-components'
import { Props } from './Tag'
import Cores from '../../Cores'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.laranja};
  color: ${Cores.creme};
  font-weight: 700;
  font-size: 12px;
  font-weight: bold;
  padding: 6px;
  display: inline-block;
  margin: 0 8px;
`
