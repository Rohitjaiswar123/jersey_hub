import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AuthenticationGuide = ({ currentLanguage }) => {
  const [activeComparison, setActiveComparison] = useState(0);

  const translations = {
    en: {
      title: "Authentic vs Counterfeit Guide",
      subtitle: "Learn to Identify Authentic Jerseys",
      authentic: "Authentic",
      counterfeit: "Counterfeit",
      keyIndicators: "Key Indicators",
      viewNext: "View Next Comparison",
      downloadGuide: "Download Full Guide"
    },
    es: {
      title: "Guía Auténtico vs Falsificado",
      subtitle: "Aprende a Identificar Camisetas Auténticas",
      authentic: "Auténtico",
      counterfeit: "Falsificado",
      keyIndicators: "Indicadores Clave",
      viewNext: "Ver Siguiente Comparación",
      downloadGuide: "Descargar Guía Completa"
    }
  };

  const t = translations[currentLanguage];

  const comparisons = [
    {
      id: 1,
      category: "Logo Quality",
      authentic: {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        indicators: [
          "Sharp, precise embroidery",
          "Correct color matching",
          "Proper logo placement",
          "High-quality thread"
        ]
      },
      counterfeit: {
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        indicators: [
          "Blurry or uneven stitching",
          "Color variations",
          "Incorrect positioning",
          "Cheap thread quality"
        ]
      }
    },
    {
      id: 2,
      category: "Fabric Quality",
      authentic: {
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
        indicators: [
          "Premium fabric feel",
          "Proper weight and thickness",
          "Moisture-wicking properties",
          "Consistent texture"
        ]
      },
      counterfeit: {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        indicators: [
          "Cheap, thin material",
          "Incorrect weight",
          "No moisture management",
          "Rough or inconsistent texture"
        ]
      }
    },
    {
      id: 3,
      category: "Tags & Labels",
      authentic: {
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
        indicators: [
          "Official holographic tags",
          "Correct font and spacing",
          "Proper tag placement",
          "Security features"
        ]
      },
      counterfeit: {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        indicators: [
          "Missing or fake holograms",
          "Font inconsistencies",
          "Wrong tag locations",
          "No security features"
        ]
      }
    },
    {
      id: 4,
      category: "Stitching Details",
      authentic: {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        indicators: [
          "Consistent stitch density",
          "Professional seam finishing",
          "Reinforced stress points",
          "Quality thread color"
        ]
      },
      counterfeit: {
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        indicators: [
          "Uneven stitching",
          "Poor seam quality",
          "Weak stress points",
          "Mismatched thread colors"
        ]
      }
    }
  ];

  const currentComparison = comparisons[activeComparison];

  const nextComparison = () => {
    setActiveComparison((prev) => (prev + 1) % comparisons.length);
  };

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

        {/* Comparison Categories */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-surface rounded-lg p-2">
            {comparisons.map((comparison, index) => (
              <button
                key={comparison.id}
                onClick={() => setActiveComparison(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  index === activeComparison
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:text-primary hover:bg-surface-hover'
                }`}
              >
                {comparison.category}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Display */}
        <div className="card max-w-6xl mx-auto">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              {currentComparison.category}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Authentic Side */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} color="white" />
                  </div>
                  <h4 className="text-xl font-bold text-success">{t.authentic}</h4>
                </div>

                <div className="aspect-video rounded-lg overflow-hidden border-2 border-success">
                  <Image
                    src={currentComparison.authentic.image}
                    alt={`${t.authentic} ${currentComparison.category}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-primary">{t.keyIndicators}:</h5>
                  {currentComparison.authentic.indicators.map((indicator, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{indicator}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Counterfeit Side */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-error rounded-full flex items-center justify-center">
                    <Icon name="X" size={16} color="white" />
                  </div>
                  <h4 className="text-xl font-bold text-error">{t.counterfeit}</h4>
                </div>

                <div className="aspect-video rounded-lg overflow-hidden border-2 border-error">
                  <Image
                    src={currentComparison.counterfeit.image}
                    alt={`${t.counterfeit} ${currentComparison.category}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-primary">{t.keyIndicators}:</h5>
                  {currentComparison.counterfeit.indicators.map((indicator, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{indicator}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                variant="primary"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={nextComparison}
              >
                {t.viewNext}
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center p-6">
            <Icon name="Eye" size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-bold text-primary mb-2">Visual Inspection</h3>
            <p className="text-sm text-text-secondary">
              Always examine logos, stitching, and overall construction quality before purchasing.
            </p>
          </div>

          <div className="card text-center p-6">
            <Icon name="Touch" size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-bold text-primary mb-2">Feel the Fabric</h3>
            <p className="text-sm text-text-secondary">
              Authentic jerseys use premium materials with specific weight and texture characteristics.
            </p>
          </div>

          <div className="card text-center p-6">
            <Icon name="Shield" size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-bold text-primary mb-2">Verify Sources</h3>
            <p className="text-sm text-text-secondary">
              Only purchase from authorized dealers and trusted authentication services.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" iconName="Download" iconPosition="left">
            {t.downloadGuide}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationGuide;