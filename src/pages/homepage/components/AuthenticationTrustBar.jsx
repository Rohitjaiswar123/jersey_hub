import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AuthenticationTrustBar = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const trustBadges = [
    {
      id: 1,
      icon: "Shield",
      title: "100% Authentic",
      description: "Every jersey verified by experts"
    },
    {
      id: 2,
      icon: "Award",
      title: "Official Licensed",
      description: "Authorized by all major leagues"
    },
    {
      id: 3,
      icon: "Truck",
      title: "Free Shipping",
      description: "On orders over $99"
    },
    {
      id: 4,
      icon: "RotateCcw",
      title: "Easy Returns",
      description: "30-day return guarantee"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      location: "Los Angeles, CA",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "The authentication process gave me complete confidence. My Lakers jersey came with detailed verification documents. Quality is outstanding!",
      verified: true,
      purchaseDate: "2 weeks ago"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "Dallas, TX",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "I've bought from other sites before, but Jersey Hub's authentication guarantee is unmatched. The jersey quality exceeded my expectations.",
      verified: true,
      purchaseDate: "1 month ago"
    },
    {
      id: 3,
      name: "David Chen",
      location: "New York, NY",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      text: "As a collector, authenticity is everything. Jersey Hub's verification process is thorough and transparent. Highly recommended!",
      verified: true,
      purchaseDate: "3 weeks ago"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "NFL Official",
      logo: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=80&h=80&fit=crop"
    },
    {
      id: 2,
      name: "NBA Licensed",
      logo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=80&h=80&fit=crop"
    },
    {
      id: 3,
      name: "MLB Authorized",
      logo: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=80&h=80&fit=crop"
    },
    {
      id: 4,
      name: "NHL Official",
      logo: "https://images.pixabay.com/photo/2017/03/27/14/33/basketball-2179344_1280.jpg?w=80&h=80&fit=crop"
    }
  ];

  const translations = {
    en: {
      trustedBy: "Trusted by 50,000+ Fans Worldwide",
      authenticationGuarantee: "Authentication Guarantee",
      learnMore: "Learn More",
      verifiedPurchase: "Verified Purchase",
      customerSays: "What Our Customers Say",
      viewAllReviews: "View All Reviews",
      officialPartners: "Official Partners",
      authenticityProcess: "Our Authenticity Process"
    },
    es: {
      trustedBy: "Confiado por más de 50,000 Fanáticos en Todo el Mundo",
      authenticationGuarantee: "Garantía de Autenticación",
      learnMore: "Saber Más",
      verifiedPurchase: "Compra Verificada",
      customerSays: "Lo Que Dicen Nuestros Clientes",
      viewAllReviews: "Ver Todas las Reseñas",
      officialPartners: "Socios Oficiales",
      authenticityProcess: "Nuestro Proceso de Autenticidad"
    }
  };

  const t = translations[currentLanguage];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gradient-to-br from-success-50 to-primary-50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
            {t.trustedBy}
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={badge.icon} size={24} className="text-success" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {badge.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Authentication Guarantee Section */}
        <div className="bg-background rounded-2xl border border-border p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mr-4">
                  <Icon name="ShieldCheck" size={32} className="text-success" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {t.authenticationGuarantee}
                  </h3>
                  <p className="text-success font-medium">100% Verified Authentic</p>
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                Every jersey undergoes our rigorous 12-point authentication process by certified experts. 
                We guarantee authenticity or your money back - no questions asked.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/authentication-center">
                  <Button
                    variant="primary"
                    iconName="Eye"
                    iconPosition="left"
                    className="bg-success hover:bg-success-600"
                  >
                    {t.authenticityProcess}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                >
                  Authentication Guide
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">12-Point</div>
                <div className="text-text-secondary text-sm">Verification Process</div>
              </div>
              <div className="bg-surface rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">50,000+</div>
                <div className="text-text-secondary text-sm">Jerseys Authenticated</div>
              </div>
              <div className="bg-surface rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">99.9%</div>
                <div className="text-text-secondary text-sm">Accuracy Rate</div>
              </div>
              <div className="bg-surface rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">24/7</div>
                <div className="text-text-secondary text-sm">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            {t.customerSays}
          </h3>
          
          <div className="relative bg-background rounded-xl border border-border p-8 max-w-4xl mx-auto">
            <div className="text-center">
              {/* Customer Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className="text-warning fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-text-primary mb-6 leading-relaxed max-w-2xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="font-semibold text-text-primary">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                  <span className="text-success text-sm font-medium">
                    {t.verifiedPurchase}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125' :'bg-border hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <Button
              variant="outline"
              iconName="MessageSquare"
              iconPosition="left"
            >
              {t.viewAllReviews}
            </Button>
          </div>
        </div>

        {/* Official Partners */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            {t.officialPartners}
          </h3>
          
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-2 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-text-tertiary">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationTrustBar;