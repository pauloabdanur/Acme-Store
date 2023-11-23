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
  const loremIpsum = [
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'sed',
    'do',
    'eiusmod',
    'tempor',
    'incididunt',
    'ut',
    'labore',
    'et',
    'dolore',
    'magna',
    'aliqua',
    'Ut',
    'enim',
    'ad',
    'minim',
    'veniam',
    'quis',
    'nostrud',
    'exercitation',
    'ullamco',
    'laboris',
    'nisi',
    'ut',
    'aliquip',
    'ex',
    'ea',
    'commodo',
    'consequat',
    'Duis',
    'aute',
    'irure',
    'dolor',
    'in',
    'reprehenderit',
    'in',
    'voluptate',
    'velit',
    'esse',
    'cillum',
    'dolore',
    'eu',
    'fugiat',
    'nulla',
    'pariatur',
    'Excepteur',
    'sint',
    'occaecat',
    'cupidatat',
    'non',
    'proident',
    'sunt',
    'in',
    'culpa',
    'qui',
    'officia',
  ];
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomWord = () =>
    loremIpsum[getRandomNumber(0, loremIpsum.length - 1)];

  let description = '';
  const descriptionLength = getRandomNumber(20, 500);

  while (description.length < descriptionLength) {
    description += ` ${getRandomWord()}`;
  }

  return description.trim();
}

function generateImage() {
  const photoId = Math.floor(Math.random() * 500);
  const imageUrl = `https://picsum.photos/id/${photoId}/200/300`;

  return imageUrl;
}

function createProduct(id: number): Product {
  const productName = generateRandomName();
  const imageUrl = generateImage();
  const productDescription = generateRandomDescription();
  const nameLength = productName.split(' ').length;
  const descrLength = productDescription.length;

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
    image: imageUrl,
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
