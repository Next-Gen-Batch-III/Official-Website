import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import ScrollToTop from './components/layout/ScrollToTop';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Journey from './pages/Journey';
import Faq from './pages/Faq';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Projects from './pages/Projects';
import Project_Detail from './pages/Project_Detail';
import TrainerJourney from './pages/trainer_journey';
import Footer from './components/layout/footer/Footer';

const People = lazy(() => import('./pages/People'));
const Team = lazy(() => import('./pages/Team'));
const Organizer = lazy(() => import('./pages/Organizer'));
const Search = lazy(() => import('./pages/Search'));


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
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
          <Route path="/trainer-journey" element={<TrainerJourney/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
