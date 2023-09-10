import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo-quad.jpg'; // Importe a imagem sem chaves
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

function Header() {
  const handleClick = () => {
    // Adicione a lógica que deseja executar quando o ícone é clicado aqui
    alert('Ícone clicado!');
  };

  return (
    <div className="header">
      <div className="px-3 py-2 border-bottom">
        <div className="container">
          <div className="px-3 py-2 border-bottom mb-3">
            <div className="container d-flex flex-wrap justify-content-center">
              <div className='cont-logo'>
                <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <img src={Logo} alt="Logo Shanti" className='logo-header' /> {/* Use a imagem sem chaves */}
                </Link>
              </div>

              <div className="form-group m-0">
                <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                  <div className="search-input-container">
                    <input type="search" className="js-search-input form-control search-input" placeholder=" " aria-label="O que você está buscando?" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={handleClick} style={{ cursor: 'pointer' }} />
                  </div>
                </form>
              </div>
              <div className="text-end">
                <button type="button" className="btn btn-light text-dark me-2">
                  Login
                </button>
                <button type="button" className="btn btn-primary">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link text-secondary">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    <use xlinkHref="#home" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    <use xlinkHref="#speedometer2" />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/orders" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    <use xlinkHref="#table" />
                  </svg>
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    <use xlinkHref="#grid" />
                  </svg>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/customers" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    <use xlinkHref="#people-circle" />
                  </svg>
                  Customers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;




