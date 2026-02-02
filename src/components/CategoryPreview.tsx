interface CategoryPreviewProps {
  category: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  };
  onNavigate: (page: string) => void;
}

export default function CategoryPreview({ category, onNavigate }: CategoryPreviewProps) {
  return (
    <div
      onClick={() => onNavigate(category.id)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-white aspect-[4/5] mb-6">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
      </div>
      <h3 className="font-serif text-2xl text-charcoal mb-3 tracking-wide">
        {category.name}
      </h3>
      <p className="text-warmGray text-sm leading-relaxed mb-4">
        {category.description}
      </p>
      <button className="text-sm tracking-wider uppercase text-champagne hover:text-charcoal transition-colors">
        Explore Collection →
      </button>
    </div>
  );
}
