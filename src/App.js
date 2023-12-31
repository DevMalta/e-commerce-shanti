import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header'; // Certifique-se de ajustar o caminho para o seu arquivo Header
import Home from './pages/home.jsx';
import ProductDetails from './pages/ProductDetails';
// import Home from '/xampp/htdocs/e-commerce-shanti/src/pages/home.php'
import Teste from './pages/Teste';



function App() {

  return (
    <Router>
      <div>
        <Header />
        <div style={{ marginTop: '10px' }}>
          <Routes>
            {/* <Route path="/" exact element={<Menu />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route exact path="/Teste" element={<Teste />} />

          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;