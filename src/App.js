import { Route, Routes } from 'react-router-dom';
import BreadCrums from './components/layouts/breadcrums';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import Hero from './components/layouts/hero';
import Home from './components/pages/home';
import Shop from './components/pages/shop';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';
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
