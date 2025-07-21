import Banner from '../../Banner/banner'
import RestaurantesList from '../../RestaurantesList/restauranteslist'
import { ContainerStyle } from './style'
import { useGetRestaurantesQuery } from '../../../services/api'

export interface RestauranteListItem {
  id: number
  title: string
  preco: number
  nome: string | undefined
  descricao: string
  foto: string
  infos: string[]
  nota: number
  redirecionador: string
}

const Home = () => {
  const { data: restaurantes, isLoading, isError } = useGetRestaurantesQuery()
  if (isLoading) {
    return <h4>Carregando...</h4>
  }

  if (isError || !restaurantes) {
    return <h4>Erro ao carregar os restaurantes.</h4>
  }
  if (restaurantes) {
    return (
      <>
        <Banner />
        <ContainerStyle>
          <RestaurantesList restaurantes={restaurantes} title="" />
        </ContainerStyle>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
