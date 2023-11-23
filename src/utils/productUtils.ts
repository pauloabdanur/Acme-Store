import { Product, WordsData } from '../types';

let availableVerbs: string[] = [];
let availableAdjectives: string[] = [];

async function loadWordsData() {
  try {
    const response = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    console.log(response);
    const wordsData: WordsData = await response.json();
    availableVerbs = wordsData.verbs;
    availableAdjectives = wordsData.adjectives;
  } catch (error) {
    console.error('Erro ao carregar dados do arquivo JSON:', error);
  }
}

const generateProducts = async (): Promise<Product[]> => {
  console.log('entrou');
  await loadWordsData();

  const productsCount = availableVerbs.length;
  const generatedProducts = [];

  for (let i = 0; i < productsCount; i++) {
    const newProduct = createProduct(i + 1);
    generatedProducts.push(newProduct);
  }

  localStorage.setItem('products', JSON.stringify(generatedProducts));

  return generatedProducts;
};

function generateRandomName(): string {
  const randomVerbIndex = Math.floor(Math.random() * availableVerbs.length);
  const randomAdjectiveIndex = Math.floor(
    Math.random() * availableAdjectives.length
  );

  const randomVerb = availableVerbs[randomVerbIndex];
  const randomAdjective = availableAdjectives[randomAdjectiveIndex];

  // Remover os verbos e adjetivos utilizados
  availableVerbs = availableVerbs.filter(
    (_, index) => index !== randomVerbIndex
  );
  availableAdjectives = availableAdjectives.filter(
    (_, index) => index !== randomAdjectiveIndex
  );

  return `${randomVerb} ${randomAdjective}`;
}

function generateRandomDescription() {
  const description = 'essa é uma descrição genérica utilizada para teste';

  return description;
}

function createProduct(id: number): Product {
  const productName = generateRandomName();

  const productDescription = generateRandomDescription();
  const nameLength = productName.split(' ').length;
  const descrLength = productDescription.length;
  console.log(descrLength);

  // Fórmula para calcular o valor
  const denominador = 4 - nameLength;
  const valor =
    10 +
    nameLength * ((500 - descrLength) / (denominador === 0 ? 1 : denominador));

  return {
    id,
    name: productName,
    description: productDescription,
    value: String(valor),
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const storedProducts = localStorage.getItem('products');

  if (storedProducts !== '[]' && storedProducts !== null) {
    return JSON.parse(storedProducts!);
  } else {
    return generateProducts();
  }
}
