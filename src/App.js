import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigations from './components/Navigations';
import HomeContent from './components/HomeContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenContent from './components/MenContent';
import WomenContent from './components/WomenContent';
import KidContent from './components/KidContent';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />      
      <BrowserRouter>
      <Navigations />
        <Routes>
          <Route path="/" element={<HomeContent />} />   
          <Route path="/home" element={<HomeContent />} />          
          <Route path="/men" element={<MenContent />} />       
          <Route path="/women" element={<WomenContent />} />          
          <Route path="/kids" element={<KidContent />} />       
          <Route path="/*" element={<PageNotFound />} />      
        </Routes>
      </BrowserRouter>         
    </div>
  );
}

export default App;
