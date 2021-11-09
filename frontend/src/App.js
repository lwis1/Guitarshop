import React from "react";
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from "./screens/ProductEditScreen"
import OrderListScreen from "./screens/OrderListScreen"
import Sidebar from "./components/Sidebar"
import AboutScreen from "./screens/AboutScreen"
import FilterScreen from "./screens/FilterScreen"
import Acoustic from "./screens/Acoustic";
import Basses from "./screens/Basses"
import Classical from "./screens/Classical"
import Others from "./screens/Others"
import Accessoir from "./screens/Accesoir"
import Pack from "./screens/Pack"
import Electric from "./screens/Electric"
import ForBiginner from "./screens/ForBiginner"
import LeftHanded from "./screens/LeftHanded"

function App() {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
      <Route path='/login' component={LoginScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/admin/userlist' component={UserListScreen} />
      <Route path='/admin/productlist' component={ProductListScreen} exact/>
      <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact/>
      <Route path='/admin/orderlist' component={OrderListScreen} />
      <Route path='/admin/user/:id/edit' component={UserEditScreen} />
      <Route path='/search/:keyword' component={HomeScreen} exact />
      <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
      <Route path='/shipping' component={ShippingScreen}/>
      <Route path='/payment' component={PaymentScreen}/>
      <Route path='/placeorder' component={PlaceOrderScreen}/>
      <Route path='/orders/:id' component={OrderScreen}/>
      <Route path='/page/:pageNumber' component={HomeScreen} exact />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/about' component={AboutScreen} exact />
      <Route path='/filter' component={FilterScreen} exact />
      <Route path='/products/category/acoustic' component={Acoustic} exact />
      <Route path='/products/category/classical' component={Classical} exact />
      <Route path='/products/category/others' component={Others} exact />
      <Route path='/products/category/basses' component={Basses} exact />
      <Route path='/products/category/forbiginner' component={ForBiginner} exact />
      <Route path='/products/category/electric' component={Electric} exact />
      <Route path='/products/category/accessoir' component={Accessoir} exact />
      <Route path='/products/category/pack' component={Pack} exact />
      <Route path='/products/category/lefthanded' component={LeftHanded} exact />

      </Container>
    </main>  
    <Sidebar /> 
    <Footer />
    </Router>
  );
}

export default App;
