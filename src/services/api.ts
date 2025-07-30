import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteListItem as Restaurante } from '../components/Pages/Home/Home'
import PratosMold from '../models/PratosMold'

interface ApiRestauranteResponse {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cadapio: any[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
      transformResponse: (rawResult: ApiRestauranteResponse[]) => {
        return rawResult.map((item) => ({
          id: item.id,
          preco: 0,
          nome: item.titulo,
          title: item.titulo,
          descricao: item.descricao,
          foto: item.capa,
          infos: [item.tipo],
          nota: item.avaliacao,
          redirecionador: `/restaurante/${item.id}`
        }))
      }
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (rawResult: ApiRestauranteResponse) => ({
        id: rawResult.id,
        preco: 0,
        nome: rawResult.titulo,
        title: rawResult.titulo,
        descricao: rawResult.descricao,
        foto: rawResult.capa,
        infos: [rawResult.tipo],
        nota: rawResult.avaliacao,
        redirecionador: `/restaurante/${rawResult.id}`
      })
    }),
    getPratos: builder.query<PratosMold[], string>({
      query: (restauranteId) => `restaurantes/${restauranteId}/cardapio`
    })
  })
})

export const {
  useGetPratosQuery,
  useGetRestauranteQuery,
  useGetRestaurantesQuery
} = api

export default api
