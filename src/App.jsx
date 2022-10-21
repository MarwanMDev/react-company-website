import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallary from './pages/gallary/Gallary';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import Notfound from './pages/notfound/Notfound';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallary />
      <Plans />
      <Trainers />
      <Notfound />
    </BrowserRouter>
  );
};

export default App;
