import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import News from './pages/News';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Footer from './components/layout/footer/Footer';
import NewsDetail from './pages/NewsDetail';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path='/news' element={<News />}/>
          <Route path="/news/:slug" element={<NewsDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
