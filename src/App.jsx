import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Footer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
