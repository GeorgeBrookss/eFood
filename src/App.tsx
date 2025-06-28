import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import Rotas from './routers'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
