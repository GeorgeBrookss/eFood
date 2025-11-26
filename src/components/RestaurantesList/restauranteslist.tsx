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
          image={restaurante.foto}
          descricao={restaurante.descricao}
          infos={restaurante.infos}
          title={restaurante.title}
          redirecionador={`/restaurantes/${restaurante.id}`}
          key={restaurante.id}
          nota={restaurante.nota}
          imageNota={Estrela}
          id={restaurante.id}
        />
      ))}
    </ListaStyle>
  </div>
)

export default RestaurantesList
