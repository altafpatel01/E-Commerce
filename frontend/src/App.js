import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/HomeComponents/Home.js';
import Footer from './components/Footer.js';
import ShopPage from './components/ShopComponents/ShopPage.js';
function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>

    </Router>
    <Footer />
    
    </>
  );
}

export default App;
