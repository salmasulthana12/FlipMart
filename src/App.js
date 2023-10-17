import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Product from './components/Product';
import Products from './pages/Products';
import CategoryProducts from './pages/CategoryProducts';
import Cart from './components/Cart';

function App() {
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/categories/:name' element={<CategoryProducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
