import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AuthenticationHero = ({ currentLanguage }) => {
  const translations = {
    en: {
      title: "Authentication Center",
      subtitle: "Your Trust, Our Guarantee",
      description: "Every jersey at Jersey Hub undergoes rigorous authentication by our team of experts. We use advanced verification techniques to ensure you receive only genuine, authentic sports memorabilia.",
      trustBadge: "100% Authentic Guarantee",
      learnMore: "Learn Our Process"
    },
    es: {
      title: "Centro de Autenticación",
      subtitle: "Tu Confianza, Nuestra Garantía",
      description: "Cada camiseta en Jersey Hub pasa por una autenticación rigurosa por nuestro equipo de expertos. Utilizamos técnicas de verificación avanzadas para asegurar que recibas solo memorabilia deportiva genuina y auténtica.",
      trustBadge: "Garantía 100% Auténtica",
      learnMore: "Conoce Nuestro Proceso"
    }
  };

  const t = translations[currentLanguage];

  return (
    <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Shield" size={40} color="white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Icon name="Check" size={16} color="white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">
            {t.title}
          </h1>
          
          <p className="text-xl lg:text-2xl text-accent font-semibold mb-6">
            {t.subtitle}
          </p>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="authentication-badge text-lg px-6 py-3">
              <Icon name="Award" size={20} className="inline mr-2" />
              {t.trustBadge}
            </div>
            
            <Button 
              variant="primary" 
              iconName="ArrowDown" 
              iconPosition="right"
              className="px-8 py-3 text-lg"
            >
              {t.learnMore}
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: "Users", count: "50+", label: "Expert Authenticators" },
              { icon: "CheckCircle", count: "1M+", label: "Jerseys Verified" },
              { icon: "Clock", count: "24-48h", label: "Verification Time" },
              { icon: "Shield", count: "100%", label: "Guarantee Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <Icon name={stat.icon} size={24} className="mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-primary">{stat.count}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationHero;