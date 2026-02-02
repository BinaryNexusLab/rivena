import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'beauty':
        return <CategoryPage categoryId="beauty" />;
      case 'home-kitchen':
        return <CategoryPage categoryId="home" />;
      case 'fashion':
        return <CategoryPage categoryId="fashion" />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
