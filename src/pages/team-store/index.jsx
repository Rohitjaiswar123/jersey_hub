import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import TeamHero from './components/TeamHero';
import ProductCategories from './components/ProductCategories';
import ProductGrid from './components/ProductGrid';
import TeamLegacy from './components/TeamLegacy';
import FanCommunity from './components/FanCommunity';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const TeamStore = () => {
  const [selectedTeam, setSelectedTeam] = useState('lakers');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleTeamChange = (teamId) => {
    setSelectedTeam(teamId);
    setSelectedCategory('all'); // Reset category when team changes
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const translations = {
    en: {
      teamStore: 'Team Store',
      shopByCategory: 'Shop by Category',
      featuredProducts: 'Featured Products',
      teamLegacy: 'Team Legacy',
      fanCommunity: 'Fan Community',
      newsletter: 'Newsletter',
      subscribe: 'Subscribe',
      followUs: 'Follow Us'
    },
    es: {
      teamStore: 'Tienda del Equipo',
      shopByCategory: 'Comprar por Categoría',
      featuredProducts: 'Productos Destacados',
      teamLegacy: 'Legado del Equipo',
      fanCommunity: 'Comunidad de Fanáticos',
      newsletter: 'Boletín',
      subscribe: 'Suscribirse',
      followUs: 'Síguenos'
    }
  };

  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Team Hero Section */}
      <TeamHero 
        selectedTeam={selectedTeam}
        onTeamChange={handleTeamChange}
      />

      {/* Product Categories */}
      <ProductCategories
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        selectedTeam={selectedTeam}
      />

      {/* Product Grid */}
      <ProductGrid
        selectedCategory={selectedCategory}
        selectedTeam={selectedTeam}
      />

      {/* Team Legacy */}
      <TeamLegacy
        selectedTeam={selectedTeam}
      />

      {/* Fan Community */}
      <FanCommunity
        selectedTeam={selectedTeam}
      />

      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.newsletter}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest team news, exclusive jersey releases, and special offers. Be the first to know about limited edition drops and community events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <Button variant="secondary" className="px-8">
              {t.subscribe}
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Shirt" size={20} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold">Jersey Hub</h3>
              </div>
              <p className="text-secondary-foreground/80 mb-4 max-w-md">
                Your ultimate destination for authentic sports jerseys. Connect with your team, express your passion, and wear your pride.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-secondary-foreground hover:bg-secondary-foreground/10 p-2">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" className="text-secondary-foreground hover:bg-secondary-foreground/10 p-2">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" className="text-secondary-foreground hover:bg-secondary-foreground/10 p-2">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" className="text-secondary-foreground hover:bg-secondary-foreground/10 p-2">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Authenticity</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Returns</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Jersey Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamStore;