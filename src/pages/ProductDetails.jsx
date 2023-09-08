import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams(); // Obtém o ID do product da URL
  const [product, setproduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `http://localhost/e-commerce-shanti/php/buscar-produtos.php?id=${id}`;

    axios.get(url)
      .then(response => {
        if (response.status === 200) {
          const productData = response.data;
          setproduct(productData);
          setIsLoading(false);
        } else {
          setError('Erro ao buscar informações do product');
          setIsLoading(false);
        }
      })
      .catch(error => {
        setError('Erro na solicitação: ' + error.message);
        setIsLoading(false);
      });
  }, [id]); // Adicione 'id' como dependência para recarregar quando o ID muda

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (!product) {
    return <p>product não encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      
      <img src={product.image} alt={product.name} />
      <p>Preço: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
