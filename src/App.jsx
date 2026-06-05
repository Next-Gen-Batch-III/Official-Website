import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Footer from './components/layout/footer/Footer';
import Spinner from './components/ui/Spinner';

import Overview from './pages/Overview';
import Faq from './pages/Faq';
import People from './pages/People';
import Team from './pages/Team';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Journey from './pages/Journey';
import Projects from './pages/Projects';
import Project_Detail from './pages/Project_Detail';
import Organizer from './pages/Organizer';
import Search from './pages/Search';


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="flex justify-center pt-30"><Spinner /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/organizers" element={<Organizer />} />
            <Route path="/people/organizers/:teamId" element={<Team />} />
            <Route path='/news' element={<News />}/>
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<Project_Detail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
