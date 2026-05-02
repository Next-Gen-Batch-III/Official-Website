import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/' element={<Footer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
