import { TituloPrato } from '../PratosList/Pratos.styles'
import {
  AdicionarBtn,
  Descricao,
  ItemBorder,
  ItemTitulo,
  PratoItem
} from './prato.styles'

type Props = {
  descricao: string
  image: string
  title: string
}

const PratoProd = ({ title, descricao, image }: Props) => (
  <PratoItem>
    <img src={image} alt={title} />
    <ItemBorder>
      <TituloPrato>
        <h3>{title}</h3>
        <ItemTitulo></ItemTitulo>
      </TituloPrato>
      <Descricao>{descricao}</Descricao>
      <AdicionarBtn>Adicionar ao carrinho</AdicionarBtn>
    </ItemBorder>
  </PratoItem>
)

export default PratoProd
