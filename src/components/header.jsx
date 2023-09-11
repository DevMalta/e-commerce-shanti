import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faComments, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
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
      <div className="container">
        <div className="container-1">
          <div className='cont-logo'>
            <Link to="/">
              <img src={Logo} alt="Logo Shanti" className='logo-header' />
            </Link>
          </div>

          <div className="form-group">
            <form className="" role="search">
              <div className="search-input-container">
                <input type="search" className="js-search-input form-control search-input" placeholder=" " aria-label="O que você está buscando?" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={handleClick} style={{ cursor: 'pointer' }} />
              </div>
            </form>
          </div>
          <div className="text-end">
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link text-white">
                  <FontAwesomeIcon icon={faComments} />
                </Link>
                Atendimento
              </li>
              <li>
                <Link to="/" className="nav-link text-white">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                Usuário
              </li>
              <li>
                <Link to="/" className="nav-link text-white">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                Carrinho
              </li>

            </ul>
          </div>
        </div>
        <div className="container-2">


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
  );
}

export default Header;




