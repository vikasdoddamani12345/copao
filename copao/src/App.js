import './App.css';
import Navbar from './components/Navigationbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Nikita/Home';
import Contact from './pages/Nikita/Contact';

function App() {
  return (
   <div>
<BrowserRouter>
<Navbar/>

<Routes>

    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/contact' element={<Contact/>}/>









</Routes>









</BrowserRouter>
   </div>
  );
}

export default App;
