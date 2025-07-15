import { RestauranteListItem } from '../Pages/Home/Home'
import { ListaStyle } from './RestaurantesList.styles'
import RestauranteProd from '../Restaurante/restaurante'
import Estrela from '../../assets/images/estrela.png'

interface Props {
  restaurantes: RestauranteListItem[]
  title: string
}

const RestaurantesList = ({ restaurantes, title }: Props) => (
  <div>
    <h2>{title}</h2>
    <ListaStyle>
      {restaurantes.map((restaurante) => (
        <RestauranteProd
          image={restaurante.image}
          descricao={restaurante.descricao}
          infos={restaurante.infos}
          title={restaurante.title}
          redirecionador={restaurante.redirecionador}
          key={restaurante.id}
          nota={restaurante.nota}
          imageNota={Estrela}
        />
      ))}
    </ListaStyle>
  </div>
)

export default RestaurantesList
