import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const location = useLocation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Team Store', path: '/team-store', icon: 'Store' },
    { name: 'Customization', path: '/customization-studio', icon: 'Palette' },
    { name: 'Authentication', path: '/authentication-center', icon: 'Shield' },
    { name: 'Dashboard', path: '/user-dashboard', icon: 'User' }
  ];

  const translations = {
    en: {
      home: 'Home',
      teamStore: 'Team Store',
      customization: 'Customization',
      authentication: 'Authentication',
      dashboard: 'Dashboard',
      search: 'Search jerseys...',
      menu: 'Menu',
      close: 'Close',
      authenticJerseys: 'Authentic Jerseys',
      authenticPassion: 'Authentic Passion'
    },
    es: {
      home: 'Inicio',
      teamStore: 'Tienda del Equipo',
      customization: 'Personalización',
      authentication: 'Autenticación',
      dashboard: 'Panel',
      search: 'Buscar camisetas...',
      menu: 'Menú',
      close: 'Cerrar',
      authenticJerseys: 'Camisetas Auténticas',
      authenticPassion: 'Pasión Auténtica'
    }
  };

  const t = translations[currentLanguage];

  return (
    <header className="fixed top-0 left-0 right-0 z-header bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-3 group">
            <div className="relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <rect
                  width="32"
                  height="32"
                  rx="8"
                  fill="currentColor"
                  className="text-primary"
                />
                <path
                  d="M8 12h16v8H8z"
                  fill="currentColor"
                  className="text-background"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="3"
                  fill="currentColor"
                  className="text-accent"
                />
                <path
                  d="M12 8v4M20 8v4M12 20v4M20 20v4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Jersey Hub</h1>
              <p className="text-xs text-text-secondary -mt-1">
                {t.authenticJerseys}, {t.authenticPassion}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary bg-surface' :'text-text-secondary hover:text-primary hover:bg-surface-hover'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>
                  {item.name === 'Home' && t.home}
                  {item.name === 'Team Store' && t.teamStore}
                  {item.name === 'Customization' && t.customization}
                  {item.name === 'Authentication' && t.authentication}
                  {item.name === 'Dashboard' && t.dashboard}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:block">
              <select
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="text-sm border border-border rounded-md px-2 py-1 bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>

            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.search}
                    className="w-48 px-3 py-2 text-sm border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background"
                    autoFocus
                  />
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSearchSubmit}
                    className="rounded-l-none"
                  >
                    <Icon name="Search" size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleSearch}
                    className="ml-1"
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSearch}
                  className="hidden md:flex"
                >
                  <Icon name="Search" size={20} />
                </Button>
              )}
            </div>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* User Menu */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="User" size={20} />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="lg:hidden"
              aria-label={isMenuOpen ? t.close : t.menu}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary bg-surface' :'text-text-secondary hover:text-primary hover:bg-surface-hover'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>
                    {item.name === 'Home' && t.home}
                    {item.name === 'Team Store' && t.teamStore}
                    {item.name === 'Customization' && t.customization}
                    {item.name === 'Authentication' && t.authentication}
                    {item.name === 'Dashboard' && t.dashboard}
                  </span>
                </Link>
              ))}
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <form onSubmit={handleSearchSubmit}>
                  <div className="flex">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t.search}
                      className="flex-1 px-3 py-2 text-sm border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background"
                    />
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleSearchSubmit}
                      className="rounded-l-none"
                    >
                      <Icon name="Search" size={16} />
                    </Button>
                  </div>
                </form>
              </div>

              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <select
                  value={currentLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="w-full text-sm border border-border rounded-md px-3 py-2 bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>

              {/* Mobile User Actions */}
              <div className="flex items-center justify-around px-3 py-2 border-t border-border mt-2">
                <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1">
                  <Icon name="User" size={20} />
                  <span className="text-xs">Profile</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1 relative">
                  <Icon name="ShoppingCart" size={20} />
                  <span className="text-xs">Cart</span>
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;