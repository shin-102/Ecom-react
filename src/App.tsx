import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Products from './pages/Products';
import ProductPage from './app-layout/ProductPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/NoPage' element={<NoPage />}/>
      <Route path='/Products' element={<Products />}/>
        <Route path='/Products/ProductPage' element={<ProductPage/>} />
    </Routes>
    </>
  )
}

export default App
