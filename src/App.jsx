import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';
import News from './pages/News';


function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<News />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
