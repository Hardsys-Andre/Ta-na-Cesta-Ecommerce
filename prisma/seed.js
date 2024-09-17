import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criando clientes
  await prisma.user.createMany({
    data: [
      { name: 'João Silva', email: 'joao.silva@example.com' },
      { name: 'Maria Souza', email: 'maria.souza@example.com' },
      { name: 'Carlos Pereira', email: 'carlos.pereira@example.com' },
    ],
  });

  // Criando produtos
  await prisma.product.createMany({
    data: [
        { name: 'Banana', unit: 'kg', price: 3.5, category: 'Frutas', quantity: 100, description: 'Banana nanica' },
        { name: 'Maçã', unit: 'kg', price: 4.0, category: 'Frutas', quantity: 80, description: 'Maçã gala' },
        { name: 'Laranja', unit: 'kg', price: 2.5, category: 'Frutas', quantity: 120, description: 'Laranja pera' },
        { name: 'Tomate', unit: 'kg', price: 5.0, category: 'Legumes', quantity: 90, description: 'Tomate italiano' },
        { name: 'Alface', unit: 'unidade', price: 2.0, category: 'Verduras', quantity: 50, description: 'Alface crespa' },
        { name: 'Cenoura', unit: 'kg', price: 3.0, category: 'Legumes', quantity: 70, description: 'Cenoura fresca' },
        { name: 'Cebola', unit: 'kg', price: 4.5, category: 'Legumes', quantity: 100, description: 'Cebola branca' },
        { name: 'Batata', unit: 'kg', price: 2.8, category: 'Legumes', quantity: 150, description: 'Batata inglesa' },
        { name: 'Pimentão', unit: 'kg', price: 6.0, category: 'Legumes', quantity: 60, description: 'Pimentão verde' },
        { name: 'Pepino', unit: 'kg', price: 3.2, category: 'Legumes', quantity: 90, description: 'Pepino japonês' },
        { name: 'Abobrinha', unit: 'kg', price: 4.5, category: 'Legumes', quantity: 70, description: 'Abobrinha italiana' },
        { name: 'Brócolis', unit: 'unidade', price: 5.5, category: 'Verduras', quantity: 30, description: 'Brócolis ninja' },
        { name: 'Couve', unit: 'unidade', price: 2.5, category: 'Verduras', quantity: 40, description: 'Couve manteiga' },
        { name: 'Mamão', unit: 'kg', price: 7.0, category: 'Frutas', quantity: 60, description: 'Mamão papaya' },
        { name: 'Melancia', unit: 'kg', price: 1.8, category: 'Frutas', quantity: 200, description: 'Melancia inteira' },
        { name: 'Limão', unit: 'kg', price: 2.0, category: 'Frutas', quantity: 90, description: 'Limão tahiti' },
        { name: 'Manga', unit: 'kg', price: 5.0, category: 'Frutas', quantity: 70, description: 'Manga palmer' },
        { name: 'Repolho', unit: 'unidade', price: 3.0, category: 'Verduras', quantity: 50, description: 'Repolho verde' },
        { name: 'Beterraba', unit: 'kg', price: 3.8, category: 'Legumes', quantity: 80, description: 'Beterraba roxa' },
        { name: 'Abacaxi', unit: 'unidade', price: 8.0, category: 'Frutas', quantity: 40, description: 'Abacaxi pérola' },
      ],
  });

  console.log('Clientes e produtos criados com sucesso.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
