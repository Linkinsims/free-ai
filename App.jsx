import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ToolDetail from './pages/ToolDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool/:id" element={<ToolDetail />} />
    </Routes>
  )
}

export default App