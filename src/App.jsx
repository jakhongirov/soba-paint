import './App.scss';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Products from './pages/products';
import News from './pages/news';
import SingleNew from './pages/singleNew';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/news' element={<News />} />
      <Route path='/new/:id' element={<SingleNew />} />
    </Routes>
  );
}

export default App;