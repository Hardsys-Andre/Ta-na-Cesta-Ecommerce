import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar produtos
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch products', error);
      setLoading(false);
    }
  };

  // Chama a função fetchProducts ao carregar o componente
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            {/* Adicionando a imagem */}
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
