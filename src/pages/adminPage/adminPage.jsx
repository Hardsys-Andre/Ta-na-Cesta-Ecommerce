import { useState } from 'react';
import { createUser, createProduct } from '../../api/apiService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../components/Button/index";
import User from "../testeDB/UserList.jsx";
import Product from "../testeDB/productList.jsx";

function AdminPage() {
  // Estados para os usuários
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Estados para os produtos
  const [productName, setProductName] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  // Função para enviar o formulário de usuário
  const handleUserSubmit = async (event) => {
    event.preventDefault();

    const userData = { name, email };

    try {
      await createUser(userData);
      toast.success('Usuário adicionado com sucesso!');
      setName('');
      setEmail('');
    } catch {
      toast.error('Erro ao adicionar usuário.');
    }
  };

  // Função para enviar o formulário de produto
  const handleProductSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      name: productName,
      unit,
      price: parseFloat(price), // Converte string para número
      category,
      quantity: parseInt(quantity), // Converte string para número
      description,
      image
    };

    try {
      await createProduct(productData);
      toast.success('Produto adicionado com sucesso!');
      setProductName('');
      setUnit('');
      setPrice('');
      setCategory('');
      setQuantity('');
      setDescription('');
      setImage('');
    } catch {
      toast.error('Erro ao adicionar produto.');
    }
  };

  return (
    <div className=''>
      <ToastContainer />
      <h1 className='text-[50px] text-center'>Área do Administrador</h1>
      
     <div className='flex flex-col mt-[50px] bg-green-500 items-center'>
     <h2>Adicionar Usuários</h2>
      <form className='flex flex-col mt-4 gap-3 items-center'
      onSubmit={handleUserSubmit}>
        <div>
          <label>
            Name:
            <input className='ml-2 w-60'
              type="text"
              placeholder='Digite seu nome completo'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input className='ml-2 w-60'
              type="email"
              placeholder='Digite seu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <Button 
        type="submit"  
        label="Adicionar Usuário" />
      </form>
     </div>
      

      <div className='flex flex-col mt-[50px] bg-red-500 items-center'>
      <h2>Adicionar Produtos</h2>
      <form className='flex flex-col mt-4 gap-3 items-center'
      onSubmit={handleProductSubmit}>
        <div >
          <label>
            Product Name:
            <input className='ml-2 w-60'
              type="text"
              placeholder='Digite o nome do produto'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Unit:
            <input className='ml-2 w-60'
              type="text"
              placeholder='Digite a unidade de medida'
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input className='ml-2 w-60'
              type="number"
              placeholder='Digite o preço do produto'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input className='ml-2 w-60'
              type="text"
              placeholder='Digite a categoria do produto'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input className='ml-2 w-60'
              type="number"
              placeholder='Digite a quantidade de produtos'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input className='ml-2 w-60'
              type="text"
              placeholder='Digite uma descrição do produto'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input className='ml-2 w-60'
              type="text"
              placeholder='Cole a URL da imagem do produto'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </label>
        </div>
        <Button 
        type="submit"  
        label="Adicionar Produto" />
      </form>
      </div>
      <div>
        <User />
        <Product />

      </div>
    </div>
  );
}

export default AdminPage;
