import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

interface CategoryPageProps {
  categoryId: string;
}

export default function CategoryPage({ categoryId }: CategoryPageProps) {
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.category === categoryId);

  if (!category) {
    return null;
  }

  return (
    <div className="bg-ivory min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-white to-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6 tracking-wide">
            {category.name}
          </h1>
          <p className="text-warmGray text-lg max-w-2xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
