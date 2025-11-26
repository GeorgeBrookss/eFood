import { useNavigate, useParams } from 'react-router-dom'
import ModalProduto from '../../Modal/Modal'
import PratosList from '../../PratosList/Pratos'
import Header from '../../Header/Header'
import {
  DestaqueStyled,
  NomeDoRestaurante,
  TemaDoRestaurante,
  ContainerStyle
} from './LaDolce.styles'
import Cart from '../../Cart/Cart'
import { useGetRestauranteQuery } from '../../../services/api'

const LaDolce = () => {
  const { id, idProduto } = useParams<{ id: string; idProduto?: string }>()
  const navigate = useNavigate()

  const { data: restaurante, isLoading } = useGetRestauranteQuery(id!)

  const produtoSelecionado =
    restaurante?.cardapio?.find((item) => item.id === Number(idProduto)) || null

  const abrirModal = (idDoProduto: number) => {
    if (id) {
      navigate(`/restaurantes/${id}/produto/${idDoProduto}`)
    }
  }

  const fecharModal = () => {
    if (id) {
      navigate(`/restaurantes/${id}`)
    }
  }

  if (isLoading || !restaurante) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Header />
      <DestaqueStyled capaUrl={restaurante.capa}>
        <ContainerStyle>
          <TemaDoRestaurante>{restaurante.tipo}</TemaDoRestaurante>
          <NomeDoRestaurante>{restaurante.titulo}</NomeDoRestaurante>
        </ContainerStyle>
      </DestaqueStyled>

      <PratosList
        pratos={restaurante.cardapio}
        title=""
        onPratoClick={abrirModal}
      />

      {produtoSelecionado && (
        <ModalProduto onClose={fecharModal} produto={produtoSelecionado} />
      )}
      <Cart />
    </>
  )
}

export default LaDolce
