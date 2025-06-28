import RestauranteMold from '../../models/Restaurante'
import { ListaStyle } from './RestaurantesList.styles'
import RestauranteProd from '../Restaurante/restaurante'
import Estrela from '../../assets/images/estrela.png'

export type Props = {
  title: string
  restaurantes: RestauranteMold[]
}

const RestaurantesList = ({ title, restaurantes }: Props) => (
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
