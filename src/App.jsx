import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import News from './pages/News';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Faq from './pages/Faq';
import People from './pages/People';
import Team from './pages/Team';
import Footer from './components/layout/footer/Footer';
import NewsDetail from './pages/NewsDetail';

import Projects from './pages/Projects';
import Project_Detail from './pages/Project_Detail';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/organizers/:teamId" element={<Team />} />
          <Route path='/news' element={<News />}/>
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Project_Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
