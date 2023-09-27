import { Route, Routes } from 'react-router-dom';
import BreadCrums from './components/layouts/breadcrums';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import Hero from './components/layouts/hero';
import Home from './components/pages/home';
import Shop from './components/pages/shop';
import Shop_Detail from './components/pages/shop-detail';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';
import Category from './components/pages/category';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <BreadCrums/>
      <section class="product spad">
        <div class="container">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/shop-detail/:id' element={<Shop_Detail/>}></Route>
            <Route path='/category/:id' element={<Category/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </div>
    </section>
    <Footer/>
    </div>
  );
}
export default App;
