import Tag from '../../components/Tag/Tag'
import {
  RestauranteItem,
  TituloRestaurante,
  RestauranteButton,
  Estrela,
  ItemTitulo,
  ItemBorder,
  Descricao,
  Infos,
  ImgRestaurante
} from './restaurante.styled'

interface Props {
  id: number
  nota: number
  descricao: string
  image: string
  infos: string[]
  title: string
  redirecionador: string
  imageNota: string
}

const RestauranteProd = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  image,
  title,
  descricao,
  nota,
  infos,
  imageNota,
  redirecionador
}: Props) => {
  console.log(`Restaurante: ${title}, URL da imagem: ${image}`)
  return (
    <RestauranteItem>
      <ImgRestaurante src={image} alt={title} />
      <Infos>
        {infos?.map((info) => (
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
        <RestauranteButton to={redirecionador}>Saiba Mais</RestauranteButton>
      </ItemBorder>
    </RestauranteItem>
  )
}
export default RestauranteProd
