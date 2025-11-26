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
          foto: item.capa,
          nota: item.avaliacao,
          title: item.titulo,
          nome: item.titulo,
          infos: [item.tipo],
          preco: 0,
          redirecionador: `/restaurantes/${item.id}`,
          capa: item.capa,
          imagem: item.capa,
          cardapio: item.cardapio.map((prato) => ({
            id: prato.id,
            nome: prato.nome,
            descricao: prato.descricao,
            foto: prato.foto,
            preco: prato.preco,
            porcao: prato.porcao || 'Porção padrão'
          }))
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
        title: rawResult.titulo,
        nome: rawResult.titulo,
        foto: rawResult.capa,
        infos: [rawResult.tipo],
        preco: 0,
        redirecionador: `/restaurantes/${rawResult.id}`,
        imagem: rawResult.capa,
        cardapio: rawResult.cardapio
      })
    }),
    getPratos: builder.query<PratosMold[], string>({
      query: (restauranteId) => `restaurantes/${restauranteId}`,
      transformResponse: (rawResult: ApiRestauranteResponse) => {
        return rawResult.cardapio.map((item) => ({
          id: item.id,
          nome: item.nome,
          descricao: item.descricao,
          foto: item.foto,
          preco: item.preco,
          porcao: item.porcao || 'Porção padrão',
          imagem: item.foto
        }))
      }
    }),
    getProduto: builder.query<PratosMold, { id: string; idProduto: string }>({
      query: (args) => `restaurantes/${args.id}`,
      transformResponse: (rawResult: ApiRestauranteResponse, meta, arg) => {
        const produtoAchado = rawResult.cardapio.find(
          (item) => item.id === Number(arg.idProduto)
        )

        if (produtoAchado) {
          return {
            id: produtoAchado.id,
            nome: produtoAchado.nome,
            descricao: produtoAchado.descricao,
            foto: produtoAchado.foto,
            preco: produtoAchado.preco,
            porcao: produtoAchado.porcao || 'Porção padrão',
            imagem: produtoAchado.foto
          }
        } else {
          throw new Error('Produto não encontrado neste restaurante')
        }
      }
    })
  })
})

export const {
  useGetPratosQuery,
  useGetRestauranteQuery,
  useGetRestaurantesQuery,
  useGetProdutoQuery
} = api

export default api
