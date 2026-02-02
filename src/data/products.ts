export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  amazonUrl: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'La Mer Crème de la Mer',
    description: 'The legendary moisturizing cream that transforms skin.',
    category: 'beauty',
    imageUrl: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '2',
    name: 'Tom Ford Velvet Orchid',
    description: 'An intoxicating fragrance that evokes elegance.',
    category: 'beauty',
    imageUrl: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '3',
    name: 'Chanel Rouge Allure Velvet',
    description: 'Luminous matte lip color with lasting comfort.',
    category: 'beauty',
    imageUrl: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '4',
    name: 'Dior Prestige La Crème',
    description: 'Exceptional anti-aging moisturizer for radiant skin.',
    category: 'beauty',
    imageUrl: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '5',
    name: 'Le Creuset Dutch Oven',
    description: 'Iconic cast iron cookware in timeless design.',
    category: 'home',
    imageUrl: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '6',
    name: 'Marble Serving Board',
    description: 'Handcrafted Italian marble for elegant entertaining.',
    category: 'home',
    imageUrl: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '7',
    name: 'Crystal Wine Decanter',
    description: 'Hand-blown crystal for the perfect pour.',
    category: 'home',
    imageUrl: 'https://images.pexels.com/photos/6629059/pexels-photo-6629059.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '8',
    name: 'Linen Tablecloth Set',
    description: 'Pure Belgian linen in natural ivory tones.',
    category: 'home',
    imageUrl: 'https://images.pexels.com/photos/6045325/pexels-photo-6045325.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '9',
    name: 'Cashmere Wrap',
    description: 'Pure Mongolian cashmere in timeless neutrals.',
    category: 'fashion',
    imageUrl: 'https://images.pexels.com/photos/7148440/pexels-photo-7148440.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '10',
    name: 'Italian Leather Handbag',
    description: 'Handcrafted in Florence with impeccable detail.',
    category: 'fashion',
    imageUrl: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '11',
    name: 'Silk Scarf Collection',
    description: 'Hand-painted silk in refined patterns.',
    category: 'fashion',
    imageUrl: 'https://images.pexels.com/photos/6069101/pexels-photo-6069101.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: '12',
    name: 'Gold-Plated Watch',
    description: 'Swiss precision meets understated elegance.',
    category: 'fashion',
    imageUrl: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800',
    amazonUrl: 'https://amazon.com',
  },
];

export const categories = [
  {
    id: 'beauty',
    name: 'Luxury Beauty',
    description: 'Curated skincare and fragrances from the world\'s finest houses.',
    imageUrl: 'https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    description: 'Timeless pieces that elevate everyday living.',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'fashion',
    name: 'Fashion & Accessories',
    description: 'Refined essentials crafted to endure.',
    imageUrl: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];
