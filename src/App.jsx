import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/layout/ScrollToTop';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { CartProvider } from './context/CartContext';

// Lazy loaded pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Overview = lazy(() => import('./pages/Overview'));
const Journey = lazy(() => import('./pages/Journey'));
const Faq = lazy(() => import('./pages/Faq'));
const People = lazy(() => import('./pages/People'));
const Organizer = lazy(() => import('./pages/Organizer'));
const OrganizerTeam = lazy(() => import('./pages/OrganizerTeam'));
const Team = lazy(() => import('./pages/Team'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const ProjectsBatchII = lazy(() => import('./pages/ProjectsBatchII'));
const ProjectsBatchIII = lazy(() => import('./pages/ProjectsBatchIII'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Search = lazy(() => import('./pages/Search'));
const Trainers = lazy(() => import('./pages/Trainers'));
const Trainees = lazy(() => import('./pages/Trainees'));
const Merchandise = lazy(() => import('./pages/Merchandise'));
const MerchandiseCustomize = lazy(() => import('./pages/MerchandiseCustomize'));
const MyOrders = lazy(() => import('./pages/MyOrders'));
const Payment = lazy(() => import('./pages/Payment'));
const PaymentProof = lazy(() => import('./pages/PaymentProof'));
const Management = lazy(() => import('./pages/Management'));
const Mentors = lazy(() => import('./pages/Mentor'));
const Advisor = lazy(() => import('./pages/Advisor'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <ScrollToTopButton />
          <Navbar />
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-brand-secondary-orange border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/organizers" element={<Organizer />} />
              <Route path="/people/organizers/:teamId" element={<OrganizerTeam />} />
              <Route path="people/:teamId" element={<Team />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/projects/batch-ii" element={<ProjectsBatchII />} />
              <Route path="/projects/batch-iii" element={<ProjectsBatchIII />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/search" element={<Search />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/trainees" element={<Trainees />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/merchandise/:productSlug/customize" element={<MerchandiseCustomize />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/proof" element={<PaymentProof />} />
              <Route path="people/management" element={<Management />} />
              <Route path="people/mentors" element={<Mentors />} />
              <Route path="people/advisors" element={<Advisor />} />

              {/* 404 Not Found Catch-All Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
