import { useEffect, useState } from 'react'
import Restaurante from '../../../models/Restaurante'
import Banner from '../../Banner/banner'
import RestaurantesList from '../../RestaurantesList/restauranteslist'
import { Estrela } from '../../Restaurante/restaurante.styled'
import { ContainerStyle } from './style'
export interface RestauranteListItem {
  id: number
  title: string
  image: string
  descricao: string
  infos: string[]
  nota: number
  redirecionador: string
  imageNota: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteListItem[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((dados: Restaurante[]) => {
        const moldados = dados.map((rest) => ({
          id: rest.id,
          title: rest.titulo,
          image: rest.capa,
          infos: [rest.tipo],
          descricao: rest.descricao,
          nota: rest.avaliacao,
          redirecionador: `/restaurante/${rest.id}`,
          imageNota: Estrela
        }))
        setRestaurantes(moldados)
      })
  }, [])

  return (
    <>
      <Banner />
      <ContainerStyle>
        <RestaurantesList restaurantes={restaurantes} title="" />
      </ContainerStyle>
    </>
  )
}

export default Home
