import { useState } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Toolbar from './components/Toolbar'
import Footer from './components/Footer/index'
import Index from './components/Index/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="w3-content" style={{ maxWidth: '2000px', marginTop: '46px' }}>
      <Toolbar />
        <Routes>
          <Route index element={<Index/>} />
        </Routes>
        <Footer />
      </div>
  </div>
  )
}

export default App
