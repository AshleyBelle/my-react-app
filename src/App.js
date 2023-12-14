
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Footer from './Components/Footer/Footer';
import UserList from './Pages/UserList';
import Transaction from './Pages/Transaction';
import AddProduct from './Pages/AddProduct'
import ProductList from './Pages/ProductList';
import UpdateProduct from './Pages/UpdateProduct';
//import TestSubject from './Pages/TestSubject';
//elements of the navbar

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/userlist' element={<UserList/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='/updateproduct' element={<UpdateProduct/>}/>
          {/*<Route path='/Testsubject' element={<TestSubject/>}/>*/}
      </Routes>
        <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
