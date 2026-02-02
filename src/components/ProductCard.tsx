import { ExternalLink } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-white aspect-square mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-xl text-charcoal mb-2 tracking-wide">
        {product.name}
      </h3>
      <p className="text-warmGray text-sm mb-4 leading-relaxed">
        {product.description}
      </p>
      <a
        href={product.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-champagne text-white text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-opacity-90 hover:gap-3"
      >
        View on Amazon
        <ExternalLink size={16} />
      </a>
    </div>
  );
}
