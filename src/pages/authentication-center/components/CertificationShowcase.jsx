import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CertificationShowcase = ({ currentLanguage }) => {
  const translations = {
    en: {
      title: "Authentication Methods & Certifications",
      subtitle: "Multiple Layers of Verification for Ultimate Trust",
      digitalCert: "Digital Certificate",
      physicalCert: "Physical Certificate",
      blockchainVerified: "Blockchain Verified",
      viewSample: "View Sample"
    },
    es: {
      title: "Métodos de Autenticación y Certificaciones",
      subtitle: "Múltiples Capas de Verificación para Máxima Confianza",
      digitalCert: "Certificado Digital",
      physicalCert: "Certificado Físico",
      blockchainVerified: "Verificado por Blockchain",
      viewSample: "Ver Muestra"
    }
  };

  const t = translations[currentLanguage];

  const certificationMethods = [
    {
      id: 1,
      name: "Holographic Security Tags",
      description: "Tamper-evident holographic tags with unique serial numbers and security features that are impossible to replicate.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      features: [
        "Unique serial numbers",
        "Tamper-evident design",
        "3D holographic elements",
        "UV-reactive inks"
      ],
      icon: "Shield"
    },
    {
      id: 2,
      name: "Digital Certificates",
      description: "Comprehensive digital documentation with detailed photos, measurements, and expert analysis stored in our secure database.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      features: [
        "Detailed photo documentation",
        "Expert analysis report",
        "Secure cloud storage",
        "QR code verification"
      ],
      icon: "FileText"
    },
    {
      id: 3,
      name: "Blockchain Verification",
      description: "Immutable blockchain records that provide permanent, transparent proof of authenticity that cannot be altered or forged.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      features: [
        "Immutable records",
        "Transparent verification",
        "Decentralized storage",
        "Smart contract integration"
      ],
      icon: "Link"
    },
    {
      id: 4,
      name: "Physical Certificates",
      description: "Premium printed certificates with security features, expert signatures, and detailed authentication findings.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      features: [
        "Security watermarks",
        "Expert signatures",
        "Detailed findings",
        "Premium paper stock"
      ],
      icon: "Award"
    }
  ];

  const partnerships = [
    {
      name: "PSA/DNA",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
      description: "Leading sports authentication service"
    },
    {
      name: "JSA",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
      description: "James Spence Authentication"
    },
    {
      name: "Beckett",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
      description: "Beckett Authentication Services"
    },
    {
      name: "FIFA",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
      description: "Official FIFA partnership"
    },
    {
      name: "NFL",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
      description: "National Football League"
    },
    {
      name: "NBA",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
      description: "National Basketball Association"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Certification Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certificationMethods.map((method) => (
            <div key={method.id} className="card card-hover">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={method.icon} size={24} color="white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {method.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {method.description}
                    </p>
                  </div>
                </div>

                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={method.image}
                    alt={method.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 mb-4">
                  {method.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full text-sm text-primary hover:text-accent transition-colors duration-300 font-medium border border-border rounded-md py-2">
                  {t.viewSample}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Certificates */}
        <div className="card mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Sample Authentication Certificates
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg text-white mb-4">
                  <Icon name="FileText" size={48} className="mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">{t.digitalCert}</h4>
                  <p className="text-sm opacity-90">Comprehensive digital documentation with QR verification</p>
                </div>
                <button className="text-sm text-primary hover:text-accent transition-colors duration-300">
                  View Digital Sample
                </button>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-success to-primary p-6 rounded-lg text-white mb-4">
                  <Icon name="Award" size={48} className="mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">{t.physicalCert}</h4>
                  <p className="text-sm opacity-90">Premium printed certificate with security features</p>
                </div>
                <button className="text-sm text-primary hover:text-accent transition-colors duration-300">
                  View Physical Sample
                </button>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-accent to-warning p-6 rounded-lg text-white mb-4">
                  <Icon name="Link" size={48} className="mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">{t.blockchainVerified}</h4>
                  <p className="text-sm opacity-90">Immutable blockchain record with smart contract</p>
                </div>
                <button className="text-sm text-primary hover:text-accent transition-colors duration-300">
                  View Blockchain Sample
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">
            Certified by Leading Organizations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-3 bg-background rounded-lg border border-border flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-8 object-contain"
                  />
                </div>
                <div className="text-sm font-medium text-primary">{partner.name}</div>
                <div className="text-xs text-text-secondary">{partner.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center space-x-2 bg-success text-success-foreground px-6 py-3 rounded-lg">
            <Icon name="Shield" size={20} />
            <span className="font-medium">All certifications backed by industry-leading standards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationShowcase;