import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx';
import ProductDetails from './pages/ProductDetails';
// import Home from '/xampp/htdocs/e-commerce-shanti/src/pages/home.php'

function App() {
  
  return (
    <Router>
      <div>
      {/* <Header /> */}
        <div style={{ marginTop: '160px' }}>
          <Routes>
            {/* <Route path="/" exact element={<Menu />} /> */}
            <Route exact path="/" element={<Home />} />          
            <Route path="/product/:id" element={<ProductDetails />} />          
          </Routes>
        </div>
        {/* <Footer /> */}
        </div>
    </Router>
  );
}

export default App;