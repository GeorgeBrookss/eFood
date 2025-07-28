import {
  Overlay,
  CartContainer,
  Sidebar,
  Quantity,
  CartItem,
  Preco,
  TotalInfo,
  CartForm,
  CartInfo,
  CartInfoList,
  CardInfoList,
  CardForm,
  CartContent
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, clearCart } from '../../store/reducers/cart'
import { AdicionarBtn } from '../Prato/prato.styles'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [showCartContent, setShowCartContent] = useState(true)
  const [showDeliveryForm, setShowDeliveryForm] = useState(false)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [showConfirmationScreen, setShowConfirmationScreen] = useState(false)

  const [receiver, setReceiver] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')

  const [orderId, setOrderId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const closeCart = () => {
    dispatch(close())
  }

  const resetCheckoutState = () => {
    setShowCartContent(true)
    setShowDeliveryForm(false)
    setShowPaymentForm(false)
    setShowConfirmationScreen(false)
    setReceiver('')
    setAddress('')
    setCity('')
    setZipCode('')
    setNumber('')
    setComplement('')
    setCardName('')
    setCardNumber('')
    setCvv('')
    setExpiryMonth('')
    setExpiryYear('')
    setOrderId(null)
    setError(null)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const handlePaymentSubmit = async () => {
    setError(null)

    const products = items.map((item) => ({
      id: item.id,
      price: item.preco
    }))

    const payload = {
      products,
      delivery: {
        receiver,
        address: {
          description: address,
          city,
          zipCode,
          number: parseInt(number),
          complement
        }
      },
      payment: {
        card: {
          name: cardName,
          number: cardNumber,
          code: parseInt(cvv),
          expires: {
            month: parseInt(expiryMonth),
            year: parseInt(expiryYear)
          }
        }
      }
    }

    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Erro HTTP: ${response.status}`)
      }
      const data = await response.json()
      setOrderId(data.orderId)
      setShowConfirmationScreen(true)
      setShowPaymentForm(false)
      dispatch(clearCart())
    } catch (err: any) {
      console.error('Erro ao finalizar o pedido:', err)
      setError(
        err.message ||
          'Ocorreu um erro ao finalizar o pedido. Por favor, tente novamente.'
      )
    }
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <CartInfo $hidden={!showCartContent}>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>
                    {item.preco.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </CartItem>
            ))}
          </ul>
          <TotalInfo>
            <Quantity>valor total</Quantity>
            <Preco>
              {' '}
              {getTotalPrice().toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </Preco>
          </TotalInfo>
          <AdicionarBtn
            title="Clique aqui para continuar com a entrega"
            type="button"
            onClick={() => {
              if (items.length > 0) {
                setShowCartContent(false)
                setShowDeliveryForm(true)
              } else {
                alert(
                  'Seu carrinho está vazio. Adicione itens antes de continuar.'
                )
              }
            }}
          >
            Continuar com a entrega
          </AdicionarBtn>
        </CartInfo>
        <CartContent $hidden={!showDeliveryForm}>
          <CartForm $show={true}>
            <h3>Entrega</h3>
            <div>
              <CartInfoList>
                <li>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    id="receiver"
                    type="text"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                    required
                  />
                </li>

                <li>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </li>

                <li>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </li>

                <div>
                  <li>
                    <label htmlFor="zipCode">CEP</label>
                    <input
                      id="zipCode"
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      required
                    />
                  </li>

                  <li>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="text"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </li>
                </div>

                <li>
                  <label htmlFor="complement">Complemento (Opcional)</label>
                  <input
                    id="complement"
                    type="text"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                  />
                </li>
              </CartInfoList>
              <AdicionarBtn
                style={{ fontWeight: 'bold' }}
                title="Clique aqui para continuar com a entrega"
                type="button"
                onClick={() => {
                  if (receiver && address && city && zipCode && number) {
                    setShowDeliveryForm(false)
                    setShowPaymentForm(true)
                  } else {
                    alert(
                      'Por favor, preencha todos os campos obrigatórios de entrega.'
                    )
                  }
                }}
              >
                Continuar com o pagamento
              </AdicionarBtn>
              <AdicionarBtn
                style={{ marginTop: '12px', fontWeight: 'bold' }}
                title="Clique aqui para continuar com a entrega"
                type="button"
                onClick={() => {
                  setShowDeliveryForm(false)
                  setShowCartContent(true)
                }}
              >
                Voltar para o carrinho
              </AdicionarBtn>
            </div>
          </CartForm>
        </CartContent>
        <CartInfo $hidden={!showPaymentForm}>
          <CardForm $show={true}>
            <CardInfoList>
              <h3>
                Pagamento - Valor a pagar{' '}
                <span>
                  {getTotalPrice().toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </span>
              </h3>

              <li>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </li>

              <div>
                <li>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </li>

                <li>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    id="cvv"
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={4}
                    required
                  />
                </li>
              </div>
              {error && (
                <p style={{ color: 'red', marginBottom: '16px' }}>{error}</p>
              )}
              <AdicionarBtn
                style={{ fontWeight: 'bold' }}
                title="Clique aqui para continuar com a entrega"
                type="button"
                onClick={handlePaymentSubmit}
              >
                Finalizar pagamento
              </AdicionarBtn>
              <AdicionarBtn
                style={{ marginTop: '12px', fontWeight: 'bold' }}
                title="Clique aqui para continuar com a entrega"
                type="button"
                onClick={() => {
                  setShowPaymentForm(false)
                  setShowDeliveryForm(true)
                }}
              >
                Voltar para o edição de endereço
              </AdicionarBtn>
            </CardInfoList>
          </CardForm>
        </CartInfo>
        <CartInfo $hidden={!showConfirmationScreen}>
          <CardForm $show={true}>
            <CardInfoList>
              <h3>Pedido realizado - {orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <br />
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <br />
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <br />
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <br />
              <AdicionarBtn
                style={{ fontWeight: 'bold' }}
                title="Clique aqui para continuar com a entrega"
                type="button"
                onClick={() => {
                  resetCheckoutState()
                  closeCart()
                }}
              >
                Concluir
              </AdicionarBtn>
            </CardInfoList>
          </CardForm>
        </CartInfo>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
