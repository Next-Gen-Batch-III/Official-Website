import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Footer from './components/layout/footer/Footer';
import Projects from './pages/Projects';
import Project_Detail from './pages/Project_Detail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Project_Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
