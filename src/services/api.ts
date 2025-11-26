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
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
      transformResponse: (rawResult: ApiRestauranteResponse[]) => {
        return rawResult.map((item) => ({
          id: item.id,
          titulo: item.titulo,
          destacado: item.destacado,
          tipo: item.tipo,
          avaliacao: item.avaliacao,
          descricao: item.descricao,
          nota: item.avaliacao,
          nome: item.titulo,
          foto: item.capa, // Corrigido (removido a duplicata)
          infos: [item.tipo], 
          preco: 0,
          redirecionador: `/restaurantes/${item.id}`
        }))
      }
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (rawResult: ApiRestauranteResponse) => ({
        id: rawResult.id,
        titulo: rawResult.titulo,
        destacado: rawResult.destacado,
        tipo: rawResult.tipo,
        avaliacao: rawResult.avaliacao,
        descricao: rawResult.descricao,
        capa: rawResult.capa,
        nota: rawResult.avaliacao,
        nome: rawResult.titulo,
        foto: rawResult.capa, 
        infos: [rawResult.tipo],
        preco: 0,
        redirecionador: `/restaurantes/${rawResult.id}`,
        cardapio: rawResult.cardapio
      })
    }),
    getPratos: builder.query<PratosMold[], string>({
      query: (restauranteId) => `restaurantes/${restauranteId}`,
      transformResponse: (rawResult: ApiRestauranteResponse) => {
        return rawResult.cardapio.map(item => ({
            id: item.id,
            nome: item.nome,
            descricao: item.descricao,
            foto: item.foto,
            preco: item.preco,
            porcao: item.porcao
        }))
      }
    })
  })
})

export const {
  useGetPratosQuery,
  useGetRestauranteQuery,
  useGetRestaurantesQuery
} = api

export default api
