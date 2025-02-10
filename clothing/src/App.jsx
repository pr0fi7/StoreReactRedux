import Home from './pages/home'
import Cart from './pages/cart'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/header' 

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
