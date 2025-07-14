import Close from '../../assets/images/close.png'
import {
  BtnCloseModal,
  ComprarBtn,
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalTexts
} from './styles'

interface Produto {
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
            <ComprarBtn>
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
