import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../components/Modal/Modal'

type CartState = {
  items: Produto[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const restaurante = state.items.find(
        (item: Produto) => item.id === action.payload.id
      )
      if (!restaurante) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item: Produto) => item.id != action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

cartReducer.actions.add

export const { add, open, close, remove, clearCart } = cartReducer.actions
export default cartReducer.reducer
