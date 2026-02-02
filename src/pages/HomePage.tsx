import { Sparkles, Shield, Star, MapPin } from 'lucide-react';
import { categories } from '../data/products';
import CategoryPreview from '../components/CategoryPreview';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-ivory">
      <style>{`
        @keyframes typewriter {
          from { 
            clip-path: inset(100% 0 0 0);
          }
          to { 
            clip-path: inset(0 0 0 0);
          }
        }
        .typewriter-text {
          animation: typewriter 3s steps(6) forwards;
        }
      `}</style>
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <video
          src="/videos/rivena.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 z-5">
          <span className="font-serif text-5xl lg:text-[10rem] text-white/20 font-bold leading-none inline-block" style={{textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)', writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Rivena</span>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-wide leading-tight font-bold" style={{textShadow: '0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 10px rgba(0, 0, 0, 0.5)'}}>
            Timeless Luxury for Modern Living
          </h1>
          <p className="text-gray-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium" style={{textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'}}>
            Discover a refined collection of beauty, home, and fashion essentials, curated for those who value elegance and quality.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-charcoal mb-4 tracking-wide">
            Our Collections
          </h2>
          <p className="text-warmGray max-w-2xl mx-auto">
            Each piece is thoughtfully selected to bring lasting beauty to your life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((category) => (
            <CategoryPreview
              key={category.id}
              category={category}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-charcoal mb-4 tracking-wide">
              Why Rivena
            </h2>
            <p className="text-warmGray max-w-2xl mx-auto">
              Our commitment to excellence in every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-champagne/10 rounded-full mb-6">
                <Sparkles className="text-champagne" size={28} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                Expertly Curated
              </h3>
              <p className="text-warmGray text-sm leading-relaxed">
                Each product is carefully selected for its craftsmanship, heritage, and timeless appeal.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-champagne/10 rounded-full mb-6">
                <Shield className="text-champagne" size={28} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                Trusted Quality
              </h3>
              <p className="text-warmGray text-sm leading-relaxed">
                We partner only with renowned brands known for exceptional standards and lasting value.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-champagne/10 rounded-full mb-6">
                <Star className="text-champagne" size={28} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                Timeless Elegance
              </h3>
              <p className="text-warmGray text-sm leading-relaxed">
                Products designed to transcend trends and remain beautiful for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-champagne/10 rounded-full mb-6">
              <MapPin className="text-champagne" size={28} />
            </div>
            <h2 className="font-serif text-4xl text-charcoal mb-4 tracking-wide">
              Visit Our Store
            </h2>
            <p className="text-warmGray text-lg">
              664 Lincoln Avenue
            </p>
            <p className="text-warmGray text-lg">
              Brooklyn, New York 11208
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
