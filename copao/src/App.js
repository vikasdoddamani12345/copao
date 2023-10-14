import './App.css';
import Navbar from './components/Navigationbar';
import Home from './pages/Nikita/Home';
import Contact from './pages/Nikita/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Abouut from './pages/Karthik/Abouut';
import Services from './pages/Karthik/Services';







function App() {
  return (
    <div>

      <Navbar />
      <BrowserRouter>
        <Routes>

        <Route exact path='/home' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />


          <Route exact path='/Aboutus' element={<Abouut />} />
          <Route exact path='/Services' element={<Services />} />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
