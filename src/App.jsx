import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Footer from './components/layout/footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
