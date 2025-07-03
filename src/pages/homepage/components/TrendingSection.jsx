import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TrendingSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const trendingJerseys = [
    {
      id: 1,
      name: "Lakers Championship Jersey",
      team: "Los Angeles Lakers",
      player: "LeBron James",
      price: 299,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 1247,
      recentPurchases: 23,
      trending: true,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Cowboys Classic Jersey",
      team: "Dallas Cowboys",
      player: "Dak Prescott",
      price: 249,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 892,
      recentPurchases: 18,
      trending: true,
      badge: "Fan Favorite"
    },
    {
      id: 3,
      name: "Warriors Home Jersey",
      team: "Golden State Warriors",
      player: "Stephen Curry",
      price: 279,
      originalPrice: 319,
      image: "https://images.pixabay.com/photo/2017/03/27/14/33/basketball-2179344_1280.jpg?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 1456,
      recentPurchases: 31,
      trending: true,
      badge: "Limited Edition"
    },
    {
      id: 4,
      name: "Chiefs Super Bowl Jersey",
      team: "Kansas City Chiefs",
      player: "Patrick Mahomes",
      price: 329,
      originalPrice: 379,
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=400&fit=crop",
      rating: 5.0,
      reviews: 2103,
      recentPurchases: 45,
      trending: true,
      badge: "Championship"
    }
  ];

  const translations = {
    en: {
      trendingNow: "Trending Now",
      hotJerseys: "Hot Jerseys This Week",
      viewAll: "View All Trending",
      addToCart: "Add to Cart",
      quickView: "Quick View",
      reviews: "reviews",
      recentPurchases: "recent purchases",
      save: "Save",
      authenticated: "Authenticated"
    },
    es: {
      trendingNow: "Tendencia Ahora",
      hotJerseys: "Camisetas Populares Esta Semana",
      viewAll: "Ver Todas las Tendencias",
      addToCart: "Agregar al Carrito",
      quickView: "Vista Rápida",
      reviews: "reseñas",
      recentPurchases: "compras recientes",
      save: "Ahorrar",
      authenticated: "Autenticado"
    }
  };

  const t = translations[currentLanguage];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center mb-2">
              <Icon name="TrendingUp" size={24} className="text-accent mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
                {t.trendingNow}
              </h2>
            </div>
            <p className="text-text-secondary text-lg">
              {t.hotJerseys}
            </p>
          </div>
          <Link to="/team-store">
            <Button
              variant="outline"
              iconName="ArrowRight"
              iconPosition="right"
              className="hidden sm:flex"
            >
              {t.viewAll}
            </Button>
          </Link>
        </div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingJerseys.map((jersey) => (
            <div
              key={jersey.id}
              className="group bg-surface rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={jersey.image}
                  alt={`${jersey.team} ${jersey.player} Jersey`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {jersey.badge}
                  </span>
                </div>

                {/* Trending Indicator */}
                {jersey.trending && (
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                      <Icon name="Flame" size={16} className="text-warning-foreground" />
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Link to="/product-detail-page">
                      <Button
                        variant="primary"
                        size="sm"
                        iconName="Eye"
                        className="bg-white text-primary hover:bg-gray-100"
                      >
                        {t.quickView}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Team & Player */}
                <div className="mb-2">
                  <h3 className="font-semibold text-text-primary text-sm mb-1">
                    {jersey.team}
                  </h3>
                  <p className="text-text-secondary text-xs">
                    {jersey.player} #{jersey.id + 22}
                  </p>
                </div>

                {/* Jersey Name */}
                <h4 className="font-bold text-text-primary mb-3 line-clamp-2">
                  {jersey.name}
                </h4>

                {/* Rating & Reviews */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={`${
                          i < Math.floor(jersey.rating)
                            ? 'text-warning fill-current' :'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-text-secondary text-xs ml-2">
                    {jersey.rating} ({jersey.reviews} {t.reviews})
                  </span>
                </div>

                {/* Social Proof */}
                <div className="flex items-center mb-4">
                  <Icon name="Users" size={14} className="text-success mr-1" />
                  <span className="text-success text-xs font-medium">
                    {jersey.recentPurchases} {t.recentPurchases}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-text-primary">
                      ${jersey.price}
                    </span>
                    {jersey.originalPrice && (
                      <span className="text-sm text-text-tertiary line-through ml-2">
                        ${jersey.originalPrice}
                      </span>
                    )}
                  </div>
                  {jersey.originalPrice && (
                    <span className="text-xs font-semibold text-success bg-success-50 px-2 py-1 rounded">
                      {t.save} ${jersey.originalPrice - jersey.price}
                    </span>
                  )}
                </div>

                {/* Authentication Badge */}
                <div className="flex items-center mb-4">
                  <Icon name="Shield" size={14} className="text-success mr-2" />
                  <span className="text-xs text-success font-medium">
                    {t.authenticated}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  iconName="ShoppingCart"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary-700"
                >
                  {t.addToCart}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link to="/team-store">
            <Button
              variant="outline"
              iconName="ArrowRight"
              iconPosition="right"
              fullWidth
            >
              {t.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;