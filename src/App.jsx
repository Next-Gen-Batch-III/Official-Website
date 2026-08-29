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
import ProjectsBatchII from './pages/ProjectsBatchII';
import ProjectDetail from './pages/ProjectDetail';
import TrainerJourney from './pages/TrainerJourney';
import Footer from './components/layout/Footer';
import ProjectsBatchIII from './pages/ProjectsBatchIII';

const People = lazy(() => import('./pages/People'));
const Team = lazy(() => import('./pages/Team'));
const OrganizerTeam = lazy(() => import('./pages/OrganizerTeam'));
const Organizer = lazy(() => import('./pages/Organizer'));
const Search = lazy(() => import('./pages/Search'));


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/organizers" element={<Organizer />} />
          <Route path="/people/organizers/:teamId" element={<OrganizerTeam />} />
          <Route path="people/:teamId" element={<Team />} />
          <Route path='/news' element={<News />}/>
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/projectsbatchII" element={<ProjectsBatchII />} />
          <Route path="/projectsbatchIII" element={<ProjectsBatchIII />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trainer-journey" element={<TrainerJourney/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
