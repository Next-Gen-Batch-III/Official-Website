import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Footer from './components/layout/footer/Footer';

const Overview = lazy(() => import('./pages/Overview'));
const Faq = lazy(() => import('./pages/Faq'));
const People = lazy(() => import('./pages/People'));
const Team = lazy(() => import('./pages/Team'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const Journey = lazy(() => import('./pages/Journey'));
const Projects = lazy(() => import('./pages/Projects'));
const Project_Detail = lazy(() => import('./pages/Project_Detail'));
const Organizer = lazy(() => import('./pages/Organizer'));
const Search = lazy(() => import('./pages/Search'));


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={null}>
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
