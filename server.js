// server.js
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Permite acesso de diferentes origens
app.use(express.json());

// Endpoint para listar produtos
app.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// Endpoint para adicionar um novo produto
app.post('/products', async (req, res) => {
  const { name, price, category, quantity } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: { name, price, category, quantity },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Endpoint para atualizar um produto
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, category, quantity } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, price, category, quantity },
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Endpoint para deletar um produto
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
