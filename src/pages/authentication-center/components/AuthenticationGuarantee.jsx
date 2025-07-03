import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AuthenticationGuarantee = ({ currentLanguage }) => {
  const translations = {
    en: {
      title: "Our Authentication Guarantee",
      subtitle: "Your Protection is Our Priority",
      fullRefund: "Full Refund Promise",
      fullRefundDesc: "If authenticity is ever questioned, we provide a full refund within 30 days of purchase.",
      insurance: "Insurance Coverage",
      insuranceDesc: "All high-value jerseys are covered by comprehensive insurance for your peace of mind.",
      lifetime: "Lifetime Support",
      lifetimeDesc: "Our authentication team provides ongoing support for any questions about your jersey.",
      legal: "Legal Protection",
      legalDesc: "We stand behind our authentication with legal guarantees and expert testimony if needed.",
      readTerms: "Read Full Terms",
      contactSupport: "Contact Support"
    },
    es: {
      title: "Nuestra Garantía de Autenticación",
      subtitle: "Tu Protección es Nuestra Prioridad",
      fullRefund: "Promesa de Reembolso Completo",
      fullRefundDesc: "Si la autenticidad es cuestionada, proporcionamos un reembolso completo dentro de 30 días de la compra.",
      insurance: "Cobertura de Seguro",
      insuranceDesc: "Todas las camisetas de alto valor están cubiertas por un seguro integral para tu tranquilidad.",
      lifetime: "Soporte de por Vida",
      lifetimeDesc: "Nuestro equipo de autenticación proporciona soporte continuo para cualquier pregunta sobre tu camiseta.",
      legal: "Protección Legal",
      legalDesc: "Respaldamos nuestra autenticación con garantías legales y testimonio experto si es necesario.",
      readTerms: "Leer Términos Completos",
      contactSupport: "Contactar Soporte"
    }
  };

  const t = translations[currentLanguage];

  const guaranteeFeatures = [
    {
      icon: "DollarSign",
      title: t.fullRefund,
      description: t.fullRefundDesc,
      color: "success"
    },
    {
      icon: "Shield",
      title: t.insurance,
      description: t.insuranceDesc,
      color: "primary"
    },
    {
      icon: "Clock",
      title: t.lifetime,
      description: t.lifetimeDesc,
      color: "accent"
    },
    {
      icon: "Scale",
      title: t.legal,
      description: t.legalDesc,
      color: "secondary"
    }
  ];

  const protectionStats = [
    { label: "Refund Rate", value: "< 0.1%", description: "Extremely low return rate due to rigorous authentication" },
    { label: "Customer Satisfaction", value: "99.8%", description: "Customers trust our authentication process" },
    { label: "Insurance Coverage", value: "$50M+", description: "Total insurance coverage for high-value items" },
    { label: "Legal Cases Won", value: "100%", description: "Perfect record in authentication disputes" }
  ];

  const faqItems = [
    {
      question: "What happens if my jersey is found to be inauthentic?",
      answer: "We provide an immediate full refund plus shipping costs. We also investigate how the item passed our authentication process and strengthen our procedures accordingly."
    },
    {
      question: "How long does the authentication guarantee last?",
      answer: "Our authentication guarantee is lifetime. If authenticity is ever questioned, we will re-examine the item and provide support regardless of when you purchased it."
    },
    {
      question: "What documentation do I receive with my authenticated jersey?",
      answer: "You receive a comprehensive authentication certificate, digital records, holographic security tags, and blockchain verification records for complete documentation."
    },
    {
      question: "Can I get insurance for my authenticated jersey?",
      answer: "Yes, we offer optional insurance coverage for high-value jerseys. Our authentication documentation is accepted by all major insurance providers."
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

        {/* Guarantee Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {guaranteeFeatures.map((feature, index) => (
            <div key={index} className="card card-hover text-center p-6">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-${feature.color}`}>
                <Icon name={feature.icon} size={32} color="white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Protection Statistics */}
        <div className="card mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Our Track Record
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {protectionStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-secondary mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee Process */}
        <div className="card mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              How Our Guarantee Works
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Report Concern</h4>
                <p className="text-sm text-text-secondary">
                  Contact our support team with any authenticity concerns about your jersey.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Expert Review</h4>
                <p className="text-sm text-text-secondary">
                  Our experts conduct a thorough re-examination of the jersey and documentation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Resolution</h4>
                <p className="text-sm text-text-secondary">
                  We provide immediate resolution including full refund if authenticity cannot be confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="card mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Guarantee FAQ
            </h3>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-b-0">
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {item.question}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
            <Icon name="Headphones" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Questions About Our Guarantee?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our authentication experts are available 24/7 to address any concerns.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="secondary" iconName="FileText" iconPosition="left">
                {t.readTerms}
              </Button>
              <Button variant="accent" iconName="MessageCircle" iconPosition="left">
                {t.contactSupport}
              </Button>
            </div>
            
            <div className="mt-6 text-sm opacity-75">
              Email: support@jerseyhub.com | Phone: 1-800-JERSEY-1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationGuarantee;