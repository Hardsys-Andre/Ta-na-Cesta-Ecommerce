import { useState } from 'react';

function AdminPage() {
  // Estados para os usuários
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  // Estados para os produtos
  const [productName, setProductName] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [productMessage, setProductMessage] = useState('');

  // Função para enviar o formulário de usuário
  const handleUserSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      setUserMessage('User added successfully!');
      setName('');
      setEmail('');
    } else {
      setUserMessage('Error adding user.');
    }
  };

  // Função para enviar o formulário de produto
  const handleProductSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: productName, unit, price: parseFloat(price), category, quantity: parseInt(quantity), description }),
    });

    if (response.ok) {
      setProductMessage('Product added successfully!');
      setProductName('');
      setUnit('');
      setPrice('');
      setDescription('');
    } else {
      setProductMessage('Error adding product.');
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      
      {/* Formulário para adicionar usuário */}
      <h2>Add User</h2>
      <form onSubmit={handleUserSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
      {userMessage && <p>{userMessage}</p>}

      {/* Formulário para adicionar produto */}
      <h2>Add Product</h2>
      <form onSubmit={handleProductSubmit}>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Unit:
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
      {productMessage && <p>{productMessage}</p>}
    </div>
  );
}

export default AdminPage;
