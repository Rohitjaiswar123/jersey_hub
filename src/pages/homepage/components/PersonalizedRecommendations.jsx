import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalizedRecommendations = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('following');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const followingTeams = [
    {
      id: 1,
      name: "Los Angeles Lakers",
      sport: "NBA",
      logo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop",
      jerseys: [
        {
          id: 1,
          player: "LeBron James",
          number: 6,
          type: "Home",
          price: 299,
          image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop",
          inStock: true
        },
        {
          id: 2,
          player: "Anthony Davis",
          number: 3,
          type: "Away",
          price: 279,
          image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=300&h=300&fit=crop",
          inStock: true
        }
      ]
    },
    {
      id: 2,
      name: "Dallas Cowboys",
      sport: "NFL",
      logo: "https://images.pixabay.com/photo/2016/11/29/06/15/american-football-1867438_1280.jpg?w=100&h=100&fit=crop",
      jerseys: [
        {
          id: 3,
          player: "Dak Prescott",
          number: 4,
          type: "Home",
          price: 249,
          image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=300&h=300&fit=crop",
          inStock: true
        },
        {
          id: 4,
          player: "CeeDee Lamb",
          number: 88,
          type: "Throwback",
          price: 329,
          image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?w=300&h=300&fit=crop",
          inStock: false
        }
      ]
    }
  ];

  const recommendedJerseys = [
    {
      id: 1,
      name: "Warriors Championship Jersey",
      team: "Golden State Warriors",
      player: "Stephen Curry",
      price: 319,
      originalPrice: 379,
      image: "https://images.pixabay.com/photo/2017/03/27/14/33/basketball-2179344_1280.jpg?w=300&h=300&fit=crop",
      reason: "Based on your Lakers interest",
      rating: 4.9,
      badge: "Championship Edition"
    },
    {
      id: 2,
      name: "Chiefs Super Bowl Jersey",
      team: "Kansas City Chiefs",
      player: "Travis Kelce",
      price: 289,
      originalPrice: 339,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      reason: "Popular with Cowboys fans",
      rating: 4.8,
      badge: "Fan Favorite"
    },
    {
      id: 3,
      name: "Dodgers World Series Jersey",
      team: "Los Angeles Dodgers",
      player: "Mookie Betts",
      price: 259,
      originalPrice: 299,
      image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=300&h=300&fit=crop",
      reason: "LA teams you might like",
      rating: 4.7,
      badge: "World Series"
    }
  ];

  const translations = {
    en: {
      forYourTeams: "For Your Teams",
      personalizedPicks: "Personalized Picks Just for You",
      following: "Following",
      recommended: "Recommended",
      viewTeamStore: "View Team Store",
      addToCart: "Add to Cart",
      outOfStock: "Out of Stock",
      notifyWhenAvailable: "Notify When Available",
      basedOn: "Based on your interests",
      followTeams: "Follow Teams",
      getPersonalized: "Get Personalized Recommendations"
    },
    es: {
      forYourTeams: "Para Tus Equipos",
      personalizedPicks: "Selecciones Personalizadas Solo para Ti",
      following: "Siguiendo",
      recommended: "Recomendado",
      viewTeamStore: "Ver Tienda del Equipo",
      addToCart: "Agregar al Carrito",
      outOfStock: "Agotado",
      notifyWhenAvailable: "Notificar Cuando Esté Disponible",
      basedOn: "Basado en tus intereses",
      followTeams: "Seguir Equipos",
      getPersonalized: "Obtener Recomendaciones Personalizadas"
    }
  };

  const t = translations[currentLanguage];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Heart" size={28} className="text-accent mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              {t.forYourTeams}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.personalizedPicks}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-surface rounded-lg p-1 border border-border">
            <button
              onClick={() => setActiveTab('following')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'following' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t.following}
            </button>
            <button
              onClick={() => setActiveTab('recommended')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'recommended' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t.recommended}
            </button>
          </div>
        </div>

        {/* Following Teams Tab */}
        {activeTab === 'following' && (
          <div className="space-y-8">
            {followingTeams.map(team => (
              <div key={team.id} className="bg-surface rounded-xl border border-border p-6">
                {/* Team Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={team.logo}
                        alt={`${team.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{team.name}</h3>
                      <p className="text-text-secondary text-sm">{team.sport}</p>
                    </div>
                  </div>
                  <Link to="/team-store">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      {t.viewTeamStore}
                    </Button>
                  </Link>
                </div>

                {/* Team Jerseys */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {team.jerseys.map(jersey => (
                    <div key={jersey.id} className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-md transition-all duration-300">
                      <div className="aspect-square relative">
                        <Image
                          src={jersey.image}
                          alt={`${jersey.player} ${jersey.type} Jersey`}
                          className="w-full h-full object-cover"
                        />
                        {!jersey.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {t.outOfStock}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-text-primary mb-1">
                          {jersey.player} #{jersey.number}
                        </h4>
                        <p className="text-text-secondary text-sm mb-2">{jersey.type}</p>
                        <p className="text-lg font-bold text-text-primary mb-3">
                          ${jersey.price}
                        </p>
                        {jersey.inStock ? (
                          <Button
                            variant="primary"
                            size="sm"
                            fullWidth
                            iconName="ShoppingCart"
                            iconPosition="left"
                          >
                            {t.addToCart}
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            fullWidth
                            iconName="Bell"
                            iconPosition="left"
                          >
                            {t.notifyWhenAvailable}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recommended Tab */}
        {activeTab === 'recommended' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedJerseys.map(jersey => (
              <div key={jersey.id} className="bg-surface rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square">
                  <Image
                    src={jersey.image}
                    alt={`${jersey.team} ${jersey.player} Jersey`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {jersey.badge}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-bold text-text-primary mb-1">{jersey.name}</h3>
                    <p className="text-text-secondary text-sm">{jersey.team}</p>
                  </div>

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
                    <span className="text-text-secondary text-sm ml-2">
                      {jersey.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-xl font-bold text-text-primary">
                        ${jersey.price}
                      </span>
                      <span className="text-text-tertiary line-through ml-2">
                        ${jersey.originalPrice}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-success bg-success-50 px-2 py-1 rounded">
                      Save ${jersey.originalPrice - jersey.price}
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <Icon name="Target" size={14} className="text-primary mr-2" />
                    <span className="text-text-secondary text-xs">{jersey.reason}</span>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    iconName="ShoppingCart"
                    iconPosition="left"
                  >
                    {t.addToCart}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State for New Users */}
        {activeTab === 'following' && followingTeams.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Users" size={64} className="text-text-tertiary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {t.followTeams}
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              {t.getPersonalized}
            </p>
            <Link to="/team-store">
              <Button
                variant="primary"
                iconName="Plus"
                iconPosition="left"
              >
                {t.followTeams}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalizedRecommendations;