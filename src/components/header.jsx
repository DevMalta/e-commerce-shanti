import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faComments, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo-quad.jpg';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={toggleDropdown} style={{ cursor: 'pointer' }} />
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
          <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">Shanti</Link>
              <button className="navbar-toggler" type="button" onClick={toggleDropdown} aria-controls="navbarsExample09" aria-expanded={showDropdown} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`collapse navbar-collapse ${showDropdown ? 'show' : ''}`} id="navbarsExample09">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/link" className="nav-link">Link</Link>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link disabled" aria-disabled="true">Disabled</span>
                  </li>
                  <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" onClick={toggleDropdown} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={showDropdown}>
                      Dropdown
                    </span>
                    <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                      <li><span className="dropdown-item">Action</span></li>
                      <li><span className="dropdown-item">Another action</span></li>
                      <li><span className="dropdown-item">Something else here</span></li>
                    </ul>
                  </li>
                </ul>
                <form role="search">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
