import Tag from '../../components/Tag/Tag'

import {
  RestauranteItem,
  TituloRestaurante,
  RestauranteButton,
  Estrela,
  ItemTitulo,
  ItemBorder,
  Descricao,
  Infos
} from './restaurante.styled'

type Props = {
  nota: number
  descricao: string
  image: string
  infos: string[]
  title: string
  redirecionador: string
  imageNota: string
}

const RestauranteProd = ({
  title,
  descricao,
  image,
  nota,
  infos,
  imageNota
}: Props) => (
  <RestauranteItem>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <ItemBorder>
      <TituloRestaurante>
        <h3>{title}</h3>
        <ItemTitulo>
          <h3>{nota}</h3>
          <Estrela src={imageNota} alt="estrela"></Estrela>
        </ItemTitulo>
      </TituloRestaurante>
      <Descricao>{descricao}</Descricao>
      <RestauranteButton to="/LaDolce">Saiba Mais</RestauranteButton>
    </ItemBorder>
  </RestauranteItem>
)

export default RestauranteProd
