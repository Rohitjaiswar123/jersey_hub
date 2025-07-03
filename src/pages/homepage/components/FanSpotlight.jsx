import React, { useState, useEffect } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FanSpotlight = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentSpotlight, setCurrentSpotlight] = useState(0);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const fanSpotlights = [
    {
      id: 1,
      name: "Marcus Thompson",
      location: "Chicago, IL",
      team: "Chicago Bulls",
      avatar: "https://randomuser.me/api/portraits/men/25.jpg",
      jerseyImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=500&fit=crop",
      story: `Been a Bulls fan since '91. This Jordan jersey isn't just clothing - it's a piece of history. Wearing it to every home game brings back memories of the championship years. The authenticity certificate from Jersey Hub gives me confidence I'm wearing the real deal.`,
      jersey: "Michael Jordan #23 Home Jersey",
      yearsFollowing: 32,
      gamesAttended: 127,
      likes: 234,
      comments: 45,
      hashtags: ["#BullsNation", "#ChicagoForever", "#JerseyHub"],
      verified: true
    },
    {
      id: 2,
      name: "Isabella Rodriguez",
      location: "Los Angeles, CA",
      team: "Los Angeles Lakers",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      jerseyImage: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=400&h=500&fit=crop",
      story: `Three generations of Lakers fans in my family. This Kobe jersey represents more than basketball - it's about legacy, determination, and the Mamba Mentality. Every time I wear it, I carry forward the spirit of greatness.`,
      jersey: "Kobe Bryant #24 City Edition",
      yearsFollowing: 18,
      gamesAttended: 89,
      likes: 567,
      comments: 89,
      hashtags: ["#MambaMentality", "#LakersFamily", "#KobeForever"],
      verified: true
    },
    {
      id: 3,
      name: "James Wilson",
      location: "Green Bay, WI",
      team: "Green Bay Packers",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      jerseyImage: "https://images.pixabay.com/photo/2016/11/29/06/15/american-football-1867438_1280.jpg?w=400&h=500&fit=crop",
      story: `Lambeau Field in December, snow falling, wearing my Rodgers jersey - there's nothing like it. This jersey has been with me through playoff runs, heartbreaks, and celebrations. It's not just team gear, it's part of who I am as a Packers fan.`,
      jersey: "Aaron Rodgers #12 Home Jersey",
      yearsFollowing: 25,
      gamesAttended: 156,
      likes: 189,
      comments: 34,
      hashtags: ["#GoPackGo", "#TitleTown", "#CheeseheadPride"],
      verified: true
    }
  ];

  const translations = {
    en: {
      fanSpotlight: "Fan Spotlight",
      realFansRealStories: "Real Fans, Real Stories",
      shareYourStory: "Share Your Story",
      joinCommunity: "Join Community",
      yearsFollowing: "Years Following",
      gamesAttended: "Games Attended",
      likes: "likes",
      comments: "comments",
      verified: "Verified Fan",
      readMore: "Read More",
      previous: "Previous",
      next: "Next"
    },
    es: {
      fanSpotlight: "Destacado de Fanáticos",
      realFansRealStories: "Fanáticos Reales, Historias Reales",
      shareYourStory: "Comparte Tu Historia",
      joinCommunity: "Únete a la Comunidad",
      yearsFollowing: "Años Siguiendo",
      gamesAttended: "Juegos Asistidos",
      likes: "me gusta",
      comments: "comentarios",
      verified: "Fanático Verificado",
      readMore: "Leer Más",
      previous: "Anterior",
      next: "Siguiente"
    }
  };

  const t = translations[currentLanguage];

  // Auto-rotate spotlights
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % fanSpotlights.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [fanSpotlights.length]);

  const goToPrevious = () => {
    setCurrentSpotlight((prev) => (prev - 1 + fanSpotlights.length) % fanSpotlights.length);
  };

  const goToNext = () => {
    setCurrentSpotlight((prev) => (prev + 1) % fanSpotlights.length);
  };

  const currentFan = fanSpotlights[currentSpotlight];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Users" size={28} className="text-accent mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              {t.fanSpotlight}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.realFansRealStories}
          </p>
        </div>

        {/* Main Spotlight */}
        <div className="relative">
          <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Fan Image */}
              <div className="relative">
                <div className="aspect-[4/5] lg:aspect-auto lg:h-full">
                  <Image
                    src={currentFan.jerseyImage}
                    alt={`${currentFan.name} wearing ${currentFan.jersey}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay with Fan Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white">
                      <Image
                        src={currentFan.avatar}
                        alt={currentFan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-white font-semibold">{currentFan.name}</h3>
                        {currentFan.verified && (
                          <Icon name="CheckCircle" size={16} className="text-success ml-2" />
                        )}
                      </div>
                      <p className="text-gray-300 text-sm">{currentFan.location}</p>
                    </div>
                  </div>
                  
                  <div className="text-white text-sm font-medium mb-2">
                    {currentFan.jersey}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-300 text-xs">
                    <span>{currentFan.team}</span>
                    <span>•</span>
                    <span>{currentFan.yearsFollowing} {t.yearsFollowing}</span>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Verified Badge */}
                {currentFan.verified && (
                  <div className="flex items-center mb-4">
                    <Icon name="Shield" size={16} className="text-success mr-2" />
                    <span className="text-success text-sm font-medium">{t.verified}</span>
                  </div>
                )}

                {/* Story */}
                <blockquote className="text-lg text-text-primary leading-relaxed mb-6">
                  "{currentFan.story}"
                </blockquote>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {currentFan.yearsFollowing}
                    </div>
                    <div className="text-text-secondary text-sm">{t.yearsFollowing}</div>
                  </div>
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {currentFan.gamesAttended}
                    </div>
                    <div className="text-text-secondary text-sm">{t.gamesAttended}</div>
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Icon name="Heart" size={16} className="text-accent mr-1" />
                      <span className="text-text-secondary text-sm">
                        {currentFan.likes} {t.likes}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="MessageCircle" size={16} className="text-primary mr-1" />
                      <span className="text-text-secondary text-sm">
                        {currentFan.comments} {t.comments}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentFan.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    iconName="Camera"
                    iconPosition="left"
                    className="flex-1"
                  >
                    {t.shareYourStory}
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Users"
                    iconPosition="left"
                    className="flex-1"
                  >
                    {t.joinCommunity}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:shadow-md transition-all duration-300 z-10"
            aria-label={t.previous}
          >
            <Icon name="ChevronLeft" size={20} className="text-text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:shadow-md transition-all duration-300 z-10"
            aria-label={t.next}
          >
            <Icon name="ChevronRight" size={20} className="text-text-primary" />
          </button>
        </div>

        {/* Spotlight Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {fanSpotlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSpotlight(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSpotlight
                  ? 'bg-primary scale-125' :'bg-border hover:bg-primary-300'
              }`}
              aria-label={`Go to spotlight ${index + 1}`}
            />
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-text-secondary">Active Fans</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">12K+</div>
            <div className="text-text-secondary">Stories Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-text-secondary">Teams Represented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
            <div className="text-text-secondary">Community Interactions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanSpotlight;