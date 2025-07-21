import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import Rotas from './routers'
import Footer from './components/Footer/Footer'
import { Provider } from 'react-redux'
import { store } from './store/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
