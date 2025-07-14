import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ModalProduto from '../../Modal'
import PratosList from '../../PratosList/Pratos'
import Header from '../../Header/Header'
import {
  DestaqueStyled,
  NomeDoRestaurante,
  TemaDoRestaurante,
  ContainerStyle
} from './LaDolce.styles'

interface Produto {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}

interface Restaurante {
  id: number
  titulo: string
  tipo: string
  cardapio: Produto[]
}

const LaDolce = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((resposta) => resposta.json())
      .then((dados: Restaurante) => {
        setRestaurante(dados)

        if (id) {
          const produto = dados.cardapio.find(
            (item) => item.id.toString() === id
          )
          setProdutoSelecionado(produto || null)
        } else {
          setProdutoSelecionado(null)
        }
      })
  }, [id])

  const navigate = useNavigate()

  const abrirModal = (id: number) => {
    navigate(`/LaDolce/produto/${id}`)
  }
  const fecharModal = () => {
    navigate(`/LaDolce/`)
  }
  return (
    <>
      <Header />
      <DestaqueStyled>
        <ContainerStyle>
          <TemaDoRestaurante>{restaurante?.tipo}</TemaDoRestaurante>
          <NomeDoRestaurante>{restaurante?.titulo}</NomeDoRestaurante>
        </ContainerStyle>
      </DestaqueStyled>

      {restaurante && (
        <PratosList
          pratos={restaurante.cardapio}
          title=""
          onPratoClick={abrirModal}
        />
      )}
      {produtoSelecionado && (
        <ModalProduto onClose={fecharModal} produto={produtoSelecionado} />
      )}
    </>
  )
}

export default LaDolce
