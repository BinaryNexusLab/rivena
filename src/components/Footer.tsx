export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory py-16 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">RIVENA</h3>
            <p className="text-sm text-warmGray leading-relaxed">
              Curating timeless luxury for modern living.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-warmGray">
              <li>Luxury Beauty</li>
              <li>Home & Kitchen</li>
              <li>Fashion & Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4">About</h4>
            <p className="text-sm text-warmGray leading-relaxed">
              As an Amazon Associate, we earn from qualifying purchases. Product availability and pricing are subject to change.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warmGray/20 text-center">
          <p className="text-sm text-warmGray">
            © 2024 Rivena. All rights reserved.
          </p>
          <p className="text-sm text-warmGray mt-2">
            <a href="https://binarynexus-lab.pages.dev/" target="_blank" rel="noopener noreferrer">Developed by BinaryNexus Lab</a>   
          </p>
        </div>
      </div>
    </footer>
  );
}
