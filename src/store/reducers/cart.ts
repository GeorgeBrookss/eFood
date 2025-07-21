import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestauranteListItem } from '../../components/Pages/Home/Home'

type CartState = {
  items: RestauranteListItem[]
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
    add: (state, action: PayloadAction<RestauranteListItem>) => {
      const restaurante = state.items.find(
        (item: RestauranteListItem) => item.id === action.payload.id
      )
      if (!restaurante) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item: RestauranteListItem) => item.id != action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

cartReducer.actions.add

export const { add, open, close, remove } = cartReducer.actions
export default cartReducer.reducer
