import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const QuickAccessModules = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [sizeFinderStep, setSizeFinderStep] = useState(1);
  const [sizeData, setSizeData] = useState({
    height: '',
    weight: '',
    fit: 'regular'
  });
  const [recommendedSize, setRecommendedSize] = useState('');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const quickAccessModules = [
    {
      id: 1,
      title: "Size Finder Tool",
      description: "Find your perfect jersey fit in seconds",
      icon: "Ruler",
      color: "primary",
      interactive: true
    },
    {
      id: 2,
      title: "Jersey Care Guide",
      description: "Keep your jerseys looking fresh",
      icon: "Sparkles",
      color: "success",
      link: "/jersey-care"
    },
    {
      id: 3,
      title: "Community Discussions",
      description: "Connect with fellow fans",
      icon: "MessageSquare",
      color: "accent",
      link: "/community"
    },
    {
      id: 4,
      title: "Authentication Check",
      description: "Verify jersey authenticity",
      icon: "Shield",
      color: "warning",
      link: "/authentication-center"
    }
  ];

  const careGuideSteps = [
    {
      id: 1,
      title: "Washing",
      description: "Turn inside out, cold water, gentle cycle",
      icon: "Droplets"
    },
    {
      id: 2,
      title: "Drying",
      description: "Air dry away from direct sunlight",
      icon: "Wind"
    },
    {
      id: 3,
      title: "Storage",
      description: "Hang or fold properly to prevent wrinkles",
      icon: "Archive"
    },
    {
      id: 4,
      title: "Stain Removal",
      description: "Treat stains immediately with cold water",
      icon: "Zap"
    }
  ];

  const communityTopics = [
    {
      id: 1,
      title: "Best Vintage Finds This Week",
      replies: 47,
      lastActive: "2 hours ago",
      author: "VintageCollector92"
    },
    {
      id: 2,
      title: "Jersey Authentication Tips",
      replies: 23,
      lastActive: "4 hours ago",
      author: "AuthExpert"
    },
    {
      id: 3,
      title: "Customization Ideas & Inspiration",
      replies: 89,
      lastActive: "1 hour ago",
      author: "DesignPro"
    }
  ];

  const translations = {
    en: {
      quickAccess: "Quick Access",
      essentialTools: "Essential Tools & Resources",
      sizeFinder: "Size Finder",
      findYourSize: "Find Your Perfect Size",
      height: "Height",
      weight: "Weight",
      preferredFit: "Preferred Fit",
      regular: "Regular",
      loose: "Loose",
      tight: "Tight",
      getRecommendation: "Get Recommendation",
      yourRecommendedSize: "Your Recommended Size",
      careGuide: "Jersey Care Guide",
      communityHighlights: "Community Highlights",
      replies: "replies",
      viewAll: "View All",
      startDiscussion: "Start Discussion",
      checkAuthenticity: "Check Authenticity"
    },
    es: {
      quickAccess: "Acceso Rápido",
      essentialTools: "Herramientas y Recursos Esenciales",
      sizeFinder: "Buscador de Tallas",
      findYourSize: "Encuentra Tu Talla Perfecta",
      height: "Altura",
      weight: "Peso",
      preferredFit: "Ajuste Preferido",
      regular: "Regular",
      loose: "Holgado",
      tight: "Ajustado",
      getRecommendation: "Obtener Recomendación",
      yourRecommendedSize: "Tu Talla Recomendada",
      careGuide: "Guía de Cuidado",
      communityHighlights: "Destacados de la Comunidad",
      replies: "respuestas",
      viewAll: "Ver Todo",
      startDiscussion: "Iniciar Discusión",
      checkAuthenticity: "Verificar Autenticidad"
    }
  };

  const t = translations[currentLanguage];

  const handleSizeCalculation = () => {
    // Simple size calculation logic
    const height = parseInt(sizeData.height);
    const weight = parseInt(sizeData.weight);
    
    if (height && weight) {
      let size = 'M';
      
      if (height < 170 && weight < 70) {
        size = sizeData.fit === 'loose' ? 'M' : 'S';
      } else if (height < 175 && weight < 80) {
        size = sizeData.fit === 'tight' ? 'S' : sizeData.fit === 'loose' ? 'L' : 'M';
      } else if (height < 185 && weight < 90) {
        size = sizeData.fit === 'tight' ? 'M' : sizeData.fit === 'loose' ? 'XL' : 'L';
      } else {
        size = sizeData.fit === 'tight' ? 'L' : 'XL';
      }
      
      setRecommendedSize(size);
      setSizeFinderStep(2);
    }
  };

  const resetSizeFinder = () => {
    setSizeFinderStep(1);
    setSizeData({ height: '', weight: '', fit: 'regular' });
    setRecommendedSize('');
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Zap" size={28} className="text-primary mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              {t.quickAccess}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.essentialTools}
          </p>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickAccessModules.map((module) => (
            <div
              key={module.id}
              className="bg-surface rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-${module.color}-100`}>
                <Icon name={module.icon} size={24} className={`text-${module.color}`} />
              </div>
              <h3 className="font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                {module.description}
              </p>
              {module.link ? (
                <Link to={module.link}>
                  <Button variant="outline" size="sm" fullWidth>
                    Access Tool
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" size="sm" fullWidth>
                  Open Tool
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Detailed Modules */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Size Finder Tool */}
          <div className="bg-surface rounded-xl border border-border p-6">
            <div className="flex items-center mb-4">
              <Icon name="Ruler" size={24} className="text-primary mr-3" />
              <h3 className="text-xl font-semibold text-text-primary">
                {t.sizeFinder}
              </h3>
            </div>
            
            {sizeFinderStep === 1 ? (
              <div>
                <p className="text-text-secondary mb-6">
                  {t.findYourSize}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t.height} (cm)
                    </label>
                    <Input
                      type="number"
                      placeholder="175"
                      value={sizeData.height}
                      onChange={(e) => setSizeData({...sizeData, height: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t.weight} (kg)
                    </label>
                    <Input
                      type="number"
                      placeholder="70"
                      value={sizeData.weight}
                      onChange={(e) => setSizeData({...sizeData, weight: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t.preferredFit}
                    </label>
                    <select
                      value={sizeData.fit}
                      onChange={(e) => setSizeData({...sizeData, fit: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="tight">{t.tight}</option>
                      <option value="regular">{t.regular}</option>
                      <option value="loose">{t.loose}</option>
                    </select>
                  </div>
                </div>
                
                <Button
                  variant="primary"
                  fullWidth
                  className="mt-6"
                  onClick={handleSizeCalculation}
                  disabled={!sizeData.height || !sizeData.weight}
                >
                  {t.getRecommendation}
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-success">{recommendedSize}</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {t.yourRecommendedSize}
                </h4>
                <p className="text-text-secondary mb-6">
                  Based on your measurements and fit preference
                </p>
                <div className="flex gap-3">
                  <Button variant="primary" size="sm" className="flex-1">
                    Shop Size {recommendedSize}
                  </Button>
                  <Button variant="outline" size="sm" onClick={resetSizeFinder}>
                    Try Again
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Jersey Care Guide */}
          <div className="bg-surface rounded-xl border border-border p-6">
            <div className="flex items-center mb-4">
              <Icon name="Sparkles" size={24} className="text-success mr-3" />
              <h3 className="text-xl font-semibold text-text-primary">
                {t.careGuide}
              </h3>
            </div>
            
            <div className="space-y-4">
              {careGuideSteps.map((step) => (
                <div key={step.id} className="flex items-start">
                  <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <Icon name={step.icon} size={16} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">
                      {step.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" fullWidth className="mt-6">
              View Complete Guide
            </Button>
          </div>

          {/* Community Highlights */}
          <div className="bg-surface rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Icon name="MessageSquare" size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-semibold text-text-primary">
                  {t.communityHighlights}
                </h3>
              </div>
              <Link to="/community">
                <Button variant="ghost" size="sm">
                  {t.viewAll}
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {communityTopics.map((topic) => (
                <div key={topic.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-medium text-text-primary mb-2 hover:text-primary cursor-pointer">
                    {topic.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-text-secondary">
                    <span>by {topic.author}</span>
                    <div className="flex items-center space-x-3">
                      <span>{topic.replies} {t.replies}</span>
                      <span>{topic.lastActive}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="primary" fullWidth className="mt-6">
              {t.startDiscussion}
            </Button>
          </div>
        </div>

        {/* Authentication Quick Check */}
        <div className="mt-12 bg-gradient-to-r from-warning-50 to-success-50 rounded-xl border border-border p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} className="text-warning" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              {t.checkAuthenticity}
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Verify the authenticity of your jersey with our expert authentication service. 
              Upload photos and get results within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/authentication-center">
                <Button
                  variant="primary"
                  iconName="Upload"
                  iconPosition="left"
                  className="bg-warning hover:bg-warning-600"
                >
                  Upload for Authentication
                </Button>
              </Link>
              <Button
                variant="outline"
                iconName="HelpCircle"
                iconPosition="left"
              >
                Authentication Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessModules;