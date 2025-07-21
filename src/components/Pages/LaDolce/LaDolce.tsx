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
import Cart from '../../Cart'

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
  capa: string
}

const LaDolce = () => {
  const { id, idProduto } = useParams<{ id: string; idProduto?: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  useEffect(() => {
    if (!id) return
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resposta) => resposta.json())
      .then((dados: Restaurante) => {
        setRestaurante(dados)

        if (idProduto) {
          const produto = dados.cardapio.find(
            (item) => item.id.toString() === idProduto
          )
          setProdutoSelecionado(produto || null)
        } else {
          setProdutoSelecionado(null)
        }
      })
  }, [id, idProduto])

  const navigate = useNavigate()

  const abrirModal = (idDoProduto: number) => {
    if (id) {
      navigate(`/restaurante/${id}/produto/${idDoProduto}`)
    }
  }
  const fecharModal = () => {
    if (id) {
      navigate(`/restaurante/${id}`)
    }
  }
  return (
    <>
      <Header />
      {restaurante && restaurante.capa ? (
        <DestaqueStyled capaUrl={restaurante.capa}>
          <ContainerStyle>
            <TemaDoRestaurante>{restaurante.tipo}</TemaDoRestaurante>
            <NomeDoRestaurante>{restaurante.titulo}</NomeDoRestaurante>
          </ContainerStyle>
        </DestaqueStyled>
      ) : (
        <div>Carregando Banner...</div>
      )}

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
      <Cart />
    </>
  )
}

export default LaDolce
