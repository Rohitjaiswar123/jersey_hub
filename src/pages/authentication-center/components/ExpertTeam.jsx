import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ExpertTeam = ({ currentLanguage }) => {
  const translations = {
    en: {
      title: "Meet Our Authentication Experts",
      subtitle: "Decades of Combined Experience in Sports Memorabilia",
      viewProfile: "View Profile",
      yearsExp: "Years Experience"
    },
    es: {
      title: "Conoce a Nuestros Expertos en Autenticación",
      subtitle: "Décadas de Experiencia Combinada en Memorabilia Deportiva",
      viewProfile: "Ver Perfil",
      yearsExp: "Años de Experiencia"
    }
  };

  const t = translations[currentLanguage];

  const experts = [
    {
      id: 1,
      name: "Dr. Michael Rodriguez",
      title: "Chief Authentication Officer",
      experience: 15,
      specialization: "NFL & NBA Jerseys",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      credentials: `Former NFL Equipment Manager with 15+ years of experience in jersey authentication. Certified by PSA/DNA and JSA. PhD in Materials Science with specialization in textile analysis.`,
      achievements: [
        "Authenticated over 100,000 NFL jerseys",
        "Expert witness in sports memorabilia court cases",
        "Published researcher in textile authentication"
      ]
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Senior Authentication Specialist",
      experience: 12,
      specialization: "Soccer & Hockey",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      credentials: `Former FIFA equipment inspector with extensive knowledge of international soccer jersey manufacturing. Certified authentication expert with 12 years of experience in European and American sports memorabilia.`,
      achievements: [
        "Verified jerseys from 50+ international teams",
        "Expert in vintage soccer jersey authentication",
        "Consultant for major auction houses"
      ]
    },
    {
      id: 3,
      name: "James Thompson",
      title: "Vintage Memorabilia Expert",
      experience: 20,
      specialization: "Vintage & Rare Jerseys",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      credentials: `20+ years specializing in vintage sports memorabilia authentication. Former curator at the Sports Hall of Fame. Expert in historical jersey manufacturing techniques and materials from 1950s-1990s.`,
      achievements: [
        "Authenticated Babe Ruth game-worn jersey",
        "Expert in pre-1980s manufacturing techniques",
        "Consultant for major sports museums"
      ]
    },
    {
      id: 4,
      name: "Maria Gonzalez",
      title: "Technology Authentication Lead",
      experience: 8,
      specialization: "Digital Verification",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      credentials: `Leading expert in digital authentication technologies including blockchain verification, holographic analysis, and advanced imaging techniques. Master's degree in Computer Science with focus on authentication systems.`,
      achievements: [
        "Developed Jersey Hub's digital verification system","Pioneer in blockchain jersey authentication","Expert in counterfeit detection algorithms"
      ]
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div key={expert.id} className="card card-hover group">
              <div className="p-6">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {expert.experience} {t.yearsExp}
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {expert.title}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {expert.specialization}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-text-secondary line-clamp-3">
                    {expert.credentials}
                  </p>
                  
                  <div className="space-y-1">
                    {expert.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-text-secondary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <button className="w-full text-sm text-primary hover:text-accent transition-colors duration-300 font-medium">
                    {t.viewProfile}
                    <Icon name="ArrowRight" size={14} className="inline ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-surface px-6 py-4 rounded-lg">
            <Icon name="Award" size={24} className="text-primary" />
            <div className="text-left">
              <div className="text-sm font-medium text-primary">Certified by Leading Organizations</div>
              <div className="text-xs text-text-secondary">PSA/DNA • JSA • Beckett • FIFA • NFL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeam;