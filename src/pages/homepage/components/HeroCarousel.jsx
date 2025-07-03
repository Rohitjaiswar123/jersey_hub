import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Exclusive Championship Collection",
      subtitle: "Celebrate Victory with Authentic Champions Jerseys",
      description: "Own a piece of history with our limited edition championship jerseys. Each piece is authenticated and comes with a certificate of authenticity.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
      ctaText: "Shop Champions",
      ctaLink: "/team-store",
      badge: "Limited Edition",
      price: "$299"
    },
    {
      id: 2,
      title: "Custom Jersey Studio",
      subtitle: "Design Your Perfect Jersey",
      description: "Create personalized jerseys with our advanced customization tools. Add your name, number, and choose from premium materials.",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?w=1200&h=600&fit=crop",
      ctaText: "Start Customizing",
      ctaLink: "/customization-studio",
      badge: "Personalize",
      price: "From $149"
    },
    {
      id: 3,
      title: "Vintage Classics Collection",
      subtitle: "Timeless Jerseys, Legendary Moments",
      description: "Discover rare vintage jerseys from iconic teams and players. Each piece tells a story of sports history and legendary achievements.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/american-football-1867438_1280.jpg?w=1200&h=600&fit=crop",
      ctaText: "Explore Vintage",
      ctaLink: "/team-store",
      badge: "Collector\'s Item",
      price: "$399"
    }
  ];

  const translations = {
    en: {
      shopNow: "Shop Now",
      learnMore: "Learn More",
      previous: "Previous",
      next: "Next"
    },
    es: {
      shopNow: "Comprar Ahora",
      learnMore: "Saber Más",
      previous: "Anterior",
      next: "Siguiente"
    }
  };

  const t = translations[currentLanguage];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-primary-900 to-secondary-800">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
                    <Icon name="Star" size={16} className="text-accent mr-2" />
                    <span className="text-accent font-medium text-sm">{slide.badge}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-xl lg:text-2xl text-gray-200 mb-6 font-medium">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center mb-8">
                    <span className="text-3xl font-bold text-white">{slide.price}</span>
                    <span className="text-gray-400 ml-2">Starting from</span>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={slide.ctaLink}>
                      <Button
                        variant="primary"
                        size="lg"
                        className="w-full sm:w-auto bg-accent hover:bg-accent-600 text-white px-8 py-4 text-lg font-semibold"
                        iconName="ArrowRight"
                        iconPosition="right"
                      >
                        {slide.ctaText}
                      </Button>
                    </Link>
                    <Link to="/authentication-center">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                        iconName="Shield"
                        iconPosition="left"
                      >
                        {t.learnMore}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
        aria-label={t.previous}
      >
        <Icon name="ChevronLeft" size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
        aria-label={t.next}
      >
        <Icon name="ChevronRight" size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent scale-125' :'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div
          className="h-full bg-accent transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;