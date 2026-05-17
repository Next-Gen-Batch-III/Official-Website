import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Faq from './pages/Faq';
import People from './pages/People';
import Team from './pages/Team';
import Footer from './components/layout/footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/organizers/:teamId" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
