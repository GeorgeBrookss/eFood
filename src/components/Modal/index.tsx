import { useDispatch } from 'react-redux'
import Close from '../../assets/images/close.png'
import {
  BtnCloseModal,
  ComprarBtn,
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalTexts
} from './styles'
import { add, open } from '../../store/reducers/cart'

export interface Produto {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}

interface ModalProdutoProps {
  produto: Produto
  onClose: () => void
}

const ModalProduto = ({ produto, onClose }: ModalProdutoProps) => {
  const dispatch = useDispatch()

  const AdicionarCart = () => {
    dispatch(add(produto))
    dispatch(open())
    onClose()
  }

  return (
    <ModalContainer onClick={onClose}>
      <ModalClose>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <img src={produto.foto} alt={produto.nome} />
          <ModalTexts>
            <h2>{produto.nome}</h2>
            <p>
              {produto.descricao} <br /> <br /> {produto.porcao}
            </p>
            <br />
            <ComprarBtn onClick={AdicionarCart}>
              Adicionar ao carrinho &#45; R$ {produto.preco}
            </ComprarBtn>
          </ModalTexts>
          <BtnCloseModal onClick={onClose}>
            <img src={Close} alt="close" />
          </BtnCloseModal>
        </ModalContent>
      </ModalClose>
    </ModalContainer>
  )
}

export default ModalProduto
