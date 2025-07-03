import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AuthenticationProcess = ({ currentLanguage }) => {
  const [activeStep, setActiveStep] = useState(0);

  const translations = {
    en: {
      title: "Our 7-Step Authentication Process",
      subtitle: "Rigorous Verification for Your Peace of Mind",
      watchVideo: "Watch Process Video",
      nextStep: "Next Step",
      prevStep: "Previous Step",
      stepOf: "Step {current} of {total}"
    },
    es: {
      title: "Nuestro Proceso de Autenticación de 7 Pasos",
      subtitle: "Verificación Rigurosa para Tu Tranquilidad",
      watchVideo: "Ver Video del Proceso",
      nextStep: "Siguiente Paso",
      prevStep: "Paso Anterior",
      stepOf: "Paso {current} de {total}"
    }
  };

  const t = translations[currentLanguage];

  const steps = [
    {
      id: 1,
      title: "Initial Inspection",
      description: "Every jersey undergoes a comprehensive visual inspection to identify obvious authenticity markers and potential red flags.",
      details: `Our experts begin with a thorough visual examination of the jersey, checking for proper team logos, correct color schemes, and overall construction quality. This initial step helps us identify any obvious counterfeits before proceeding to more detailed analysis.`,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      icon: "Eye",
      duration: "5-10 minutes",
      tools: ["Magnifying glass", "UV light", "Color charts"]
    },
    {
      id: 2,
      title: "Material Analysis",
      description: "Advanced testing of fabric composition, weight, and texture to verify authentic materials used by official manufacturers.",
      details: `We analyze the fabric composition using specialized equipment to ensure the materials match those used by official manufacturers. This includes testing fabric weight, thread count, and material composition to detect synthetic replicas.`,
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      icon: "Microscope",
      duration: "15-20 minutes",
      tools: ["Fabric analyzer", "Digital scale", "Texture scanner"]
    },
    {
      id: 3,
      title: "Stitching Verification",
      description: "Detailed examination of stitching patterns, thread quality, and construction techniques specific to authentic jerseys.",
      details: `Authentic jerseys have specific stitching patterns and techniques that are difficult to replicate. Our experts examine seam construction, thread quality, and stitching density to verify authenticity.`,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      icon: "Scissors",
      duration: "10-15 minutes",
      tools: ["Thread counter", "Seam gauge", "Stitch analyzer"]
    },
    {
      id: 4,
      title: "Logo Authentication",
      description: "Precise verification of team logos, manufacturer marks, and official licensing tags for accuracy and placement.",
      details: `We verify all logos, patches, and manufacturer marks against official specifications. This includes checking logo placement, size, color accuracy, and the quality of embroidery or printing techniques used.`,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      icon: "Award",
      duration: "20-25 minutes",
      tools: ["Logo database", "Color matcher", "Measurement tools"]
    },
    {
      id: 5,
      title: "Tag Verification",
      description: "Authentication of size tags, care labels, and holographic security features unique to genuine merchandise.",
      details: `All tags and labels are carefully examined for authenticity markers including holographic features, specific fonts, and placement. We maintain a database of authentic tag variations for comparison.`,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      icon: "Tag",
      duration: "10-15 minutes",
      tools: ["Hologram scanner", "Tag database", "Font analyzer"]
    },
    {
      id: 6,
      title: "Digital Verification",
      description: "Advanced digital imaging and database comparison to cross-reference with known authentic examples.",
      details: `Using advanced imaging technology and our comprehensive database, we compare the jersey against thousands of verified authentic examples to identify any discrepancies or variations.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      icon: "Monitor",
      duration: "15-20 minutes",
      tools: ["Digital scanner", "Database system", "AI comparison"]
    },
    {
      id: 7,
      title: "Final Certification",
      description: "Comprehensive documentation and certification with unique authentication codes and guarantee certificates.",
      details: `Upon successful verification, we issue a comprehensive authentication certificate with unique codes, detailed findings, and our guarantee. Each jersey receives a tamper-evident hologram and digital record.`,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      icon: "FileCheck",
      duration: "5-10 minutes",
      tools: ["Certificate printer", "Hologram applicator", "Digital registry"]
    }
  ];

  const currentStep = steps[activeStep];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>
          <Button variant="accent" iconName="Play" iconPosition="left">
            {t.watchVideo}
          </Button>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-background rounded-full p-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface hover:bg-surface-hover text-text-secondary'
                }`}
              >
                {step.id}
              </button>
            ))}
          </div>
        </div>

        {/* Current Step Display */}
        <div className="card max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name={currentStep.icon} size={24} color="white" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary">
                    {t.stepOf.replace('{current}', activeStep + 1).replace('{total}', steps.length)}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-text-secondary">
                {currentStep.description}
              </p>

              <p className="text-sm text-text-secondary leading-relaxed">
                {currentStep.details}
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">
                    Duration: {currentStep.duration}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-medium text-primary mb-2">Tools Used:</div>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-surface px-3 py-1 rounded-full text-xs text-text-secondary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center px-8 pb-8">
            <Button
              variant="outline"
              iconName="ArrowLeft"
              iconPosition="left"
              onClick={prevStep}
              disabled={activeStep === 0}
            >
              {t.prevStep}
            </Button>

            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeStep ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="primary"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={nextStep}
              disabled={activeStep === steps.length - 1}
            >
              {t.nextStep}
            </Button>
          </div>
        </div>

        {/* Process Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={32} color="white" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">24-48 Hours</h3>
            <p className="text-sm text-text-secondary">Average processing time for complete authentication</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} color="white" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Expert Team</h3>
            <p className="text-sm text-text-secondary">Multiple experts review each jersey for accuracy</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} color="white" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">100% Guarantee</h3>
            <p className="text-sm text-text-secondary">Full refund if authenticity is ever questioned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationProcess;