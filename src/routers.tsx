import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import LaDolce from './components/Pages/LaDolce/LaDolce'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id/" element={<LaDolce />} />
    <Route path="/restaurantes/:id/produto/:idProduto" element={<LaDolce />} />
  </Routes>
)

export default Rotas
