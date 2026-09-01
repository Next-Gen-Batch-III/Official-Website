import { lazy } from 'react';
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
import Trainers from './pages/Trainers';
import Footer from './components/layout/Footer';
import Merchandise from './pages/Merchandise';
import MerchandiseCustomize from './pages/MerchandiseCustomize';
import MyOrders from './pages/MyOrders';
import Payment from './pages/Payment';
import PaymentProof from './pages/PaymentProof';
import { CartProvider } from './context/CartContext';
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
        <CartProvider>
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
          <Route path="/projects/batch-ii" element={<ProjectsBatchII />} />
          <Route path="/projects/batch-iii" element={<ProjectsBatchIII />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trainer-journey" element={<TrainerJourney/>} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/merchandise" element={<Merchandise/>} />
          <Route path="/merchandise/:productSlug/customize" element={<MerchandiseCustomize/>} />
          <Route path="/my-orders" element={<MyOrders/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/payment/proof" element={<PaymentProof/>} />
        </Routes>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}
export default App
