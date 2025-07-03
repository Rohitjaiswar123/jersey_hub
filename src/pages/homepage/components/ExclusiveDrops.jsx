import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExclusiveDrops = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const exclusiveDrops = [
    {
      id: 1,
      title: "Retro Championship Collection",
      description: "Limited edition throwback jerseys from championship seasons. Only 500 pieces available worldwide.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      releaseDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      price: 399,
      originalPrice: 499,
      quantity: 500,
      sold: 127,
      badge: "Limited Edition",
      featured: true
    },
    {
      id: 2,
      title: "Rookie Debut Series",
      description: "First official jerseys of this year's top draft picks. Get them before they become legends.",
      image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=600&h=400&fit=crop",
      releaseDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      price: 249,
      originalPrice: 299,
      quantity: 1000,
      sold: 234,
      badge: "Rookie Collection"
    },
    {
      id: 3,
      title: "Hall of Fame Tribute",
      description: "Commemorative jerseys honoring newly inducted Hall of Fame legends.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/american-football-1867438_1280.jpg?w=600&h=400&fit=crop",
      releaseDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      price: 449,
      originalPrice: 549,
      quantity: 300,
      sold: 89,
      badge: "Hall of Fame"
    }
  ];

  const translations = {
    en: {
      exclusiveDrops: "Exclusive Drops",
      limitedReleases: "Limited Releases & Early Access",
      getEarlyAccess: "Get Early Access",
      notifyMe: "Notify Me",
      viewAllDrops: "View All Drops",
      launchesIn: "Launches in",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      piecesLeft: "pieces left",
      sold: "sold",
      earlyAccess: "Early Access Available"
    },
    es: {
      exclusiveDrops: "Lanzamientos Exclusivos",
      limitedReleases: "Lanzamientos Limitados y Acceso Anticipado",
      getEarlyAccess: "Obtener Acceso Anticipado",
      notifyMe: "Notificarme",
      viewAllDrops: "Ver Todos los Lanzamientos",
      launchesIn: "Se lanza en",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
      piecesLeft: "piezas restantes",
      sold: "vendido",
      earlyAccess: "Acceso Anticipado Disponible"
    }
  };

  const t = translations[currentLanguage];

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = {};
      
      exclusiveDrops.forEach(drop => {
        const difference = drop.releaseDate - new Date();
        
        if (difference > 0) {
          newTimeLeft[drop.id] = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      });
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [exclusiveDrops]);

  const getProgressPercentage = (sold, quantity) => {
    return (sold / quantity) * 100;
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Zap" size={28} className="text-accent mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              {t.exclusiveDrops}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.limitedReleases}
          </p>
        </div>

        {/* Featured Drop */}
        {exclusiveDrops.filter(drop => drop.featured).map(drop => (
          <div key={drop.id} className="mb-12">
            <div className="bg-gradient-to-r from-primary-900 to-secondary-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative">
                  <Image
                    src={drop.image}
                    alt={drop.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                      {drop.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {drop.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {drop.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-white">${drop.price}</span>
                    <span className="text-gray-400 line-through ml-3 text-xl">
                      ${drop.originalPrice}
                    </span>
                    <span className="ml-3 px-3 py-1 bg-success text-success-foreground text-sm font-semibold rounded-full">
                      Save ${drop.originalPrice - drop.price}
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  {timeLeft[drop.id] && (
                    <div className="mb-6">
                      <p className="text-gray-300 mb-3 font-medium">{t.launchesIn}:</p>
                      <div className="grid grid-cols-4 gap-4">
                        {Object.entries(timeLeft[drop.id]).map(([unit, value]) => (
                          <div key={unit} className="text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-2">
                              <span className="text-2xl font-bold text-white">
                                {value.toString().padStart(2, '0')}
                              </span>
                            </div>
                            <span className="text-gray-400 text-xs uppercase tracking-wide">
                              {t[unit]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>{drop.sold} {t.sold}</span>
                      <span>{drop.quantity - drop.sold} {t.piecesLeft}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${getProgressPercentage(drop.sold, drop.quantity)}%` }}
                      />
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-accent hover:bg-accent-600 text-white flex-1"
                      iconName="Bell"
                      iconPosition="left"
                    >
                      {t.getEarlyAccess}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-primary"
                      iconName="Eye"
                      iconPosition="left"
                    >
                      {t.notifyMe}
                    </Button>
                  </div>

                  {/* Early Access Badge */}
                  <div className="mt-4 flex items-center">
                    <Icon name="Crown" size={16} className="text-warning mr-2" />
                    <span className="text-warning text-sm font-medium">
                      {t.earlyAccess}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Drops Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {exclusiveDrops.filter(drop => !drop.featured).map(drop => (
            <div key={drop.id} className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="relative">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {drop.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {drop.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {drop.description}
                </p>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-text-primary">${drop.price}</span>
                  <span className="text-text-tertiary line-through ml-2">
                    ${drop.originalPrice}
                  </span>
                </div>

                {/* Countdown */}
                {timeLeft[drop.id] && (
                  <div className="mb-4">
                    <p className="text-text-secondary mb-2 text-sm">{t.launchesIn}:</p>
                    <div className="grid grid-cols-4 gap-2">
                      {Object.entries(timeLeft[drop.id]).map(([unit, value]) => (
                        <div key={unit} className="text-center">
                          <div className="bg-surface rounded p-2 mb-1">
                            <span className="text-lg font-bold text-text-primary">
                              {value.toString().padStart(2, '0')}
                            </span>
                          </div>
                          <span className="text-text-tertiary text-xs">
                            {t[unit]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-text-secondary mb-1">
                    <span>{drop.sold} {t.sold}</span>
                    <span>{drop.quantity - drop.sold} {t.piecesLeft}</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-1.5">
                    <div
                      className="bg-accent h-1.5 rounded-full"
                      style={{ width: `${getProgressPercentage(drop.sold, drop.quantity)}%` }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  iconName="Bell"
                  iconPosition="left"
                >
                  {t.notifyMe}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/team-store">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
            >
              {t.viewAllDrops}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDrops;