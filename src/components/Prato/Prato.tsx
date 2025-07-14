import { TituloPrato } from '../PratosList/Pratos.styles'
import {
  AdicionarBtn,
  Descricao,
  ItemBorder,
  ItemTitulo,
  PratoItem
} from './prato.styles'

interface Props {
  image: string
  descricao: string
  title: string
  onClick?: () => void
}

const getDescricao = (descricao: string) => {
  if (descricao.length > 132) {
    return descricao.slice(0, 129) + '...'
  }
  return descricao
}
const PratoProd = ({ title, descricao, image, onClick }: Props) => (
  <PratoItem onClick={onClick}>
    <img src={image} alt={title} />
    <ItemBorder>
      <TituloPrato>
        <h3>{title}</h3>
        <ItemTitulo></ItemTitulo>
      </TituloPrato>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <AdicionarBtn>Mais detalhes</AdicionarBtn>
    </ItemBorder>
  </PratoItem>
)

export default PratoProd
