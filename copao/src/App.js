import './App.css';
import Navbar from './components/Navigationbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Abouut from './pages/Karthik/Abouut';
import Services from './pages/Karthik/Services';







function App() {
  return (
    <div>

      <Navbar />
      <BrowserRouter>
        <Routes>


          <Route exact path='/Aboutus' element={<Abouut />} />
          <Route exact path='/Services' element={<Services />} />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
