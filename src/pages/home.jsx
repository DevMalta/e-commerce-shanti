import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Substitua a URL abaixo pela URL correta do seu servidor PHP
    const apiUrl = 'http://localhost/e-commerce-shanti/php/listar-produtos.php';

    axios.get(apiUrl)
      .then(response => {
        // Verifica se a resposta é um array
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('Os dados recebidos não são um array:', response.data);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="display-4 mt-5 mb-5">Produtos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Array.isArray(products) && products.map(product => (
          <div className="col mb-4 text-center" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">R$ {product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">Detalhes</Link>              
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
