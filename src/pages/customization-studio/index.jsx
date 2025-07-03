import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import JerseyPreview from './components/JerseyPreview';
import JerseySelector from './components/JerseySelector';
import CustomizationPanel from './components/CustomizationPanel';
import PricingBreakdown from './components/PricingBreakdown';
import InspirationGallery from './components/InspirationGallery';

const CustomizationStudio = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [selectedJersey, setSelectedJersey] = useState(null);
  const [viewMode, setViewMode] = useState('front');
  const [activeTab, setActiveTab] = useState('select');
  const [customization, setCustomization] = useState({
    size: 'M',
    playerName: '',
    playerNumber: '',
    fontStyle: 'Arial, sans-serif',
    textColor: '#FFFFFF',
    patches: []
  });
  const [savedDesigns, setSavedDesigns] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
    
    // Load saved designs from localStorage
    const saved = localStorage.getItem('savedDesigns');
    if (saved) {
      setSavedDesigns(JSON.parse(saved));
    }
  }, []);

  const translations = {
    en: {
      title: 'Customization Studio',
      subtitle: 'Design Your Perfect Jersey',
      description: 'Create a personalized jersey that represents your passion and style',
      selectJersey: 'Select Jersey',
      customize: 'Customize',
      preview: 'Preview',
      inspiration: 'Inspiration',
      pricing: 'Pricing',
      designSaved: 'Design saved successfully!',
      addedToCart: 'Jersey added to cart!',
      steps: {
        select: 'Choose your base jersey from our collection',
        customize: 'Add your personal touch with names, numbers, and patches',
        preview: 'See your design come to life with real-time preview',
        order: 'Review pricing and place your order'
      }
    },
    es: {
      title: 'Estudio de Personalización',
      subtitle: 'Diseña Tu Camiseta Perfecta',
      description: 'Crea una camiseta personalizada que represente tu pasión y estilo',
      selectJersey: 'Seleccionar Camiseta',
      customize: 'Personalizar',
      preview: 'Vista Previa',
      inspiration: 'Inspiración',
      pricing: 'Precios',
      designSaved: '¡Diseño guardado exitosamente!',
      addedToCart: '¡Camiseta agregada al carrito!',
      steps: {
        select: 'Elige tu camiseta base de nuestra colección',
        customize: 'Añade tu toque personal con nombres, números y parches',
        preview: 'Ve tu diseño cobrar vida con vista previa en tiempo real',
        order: 'Revisa los precios y realiza tu pedido'
      }
    }
  };

  const t = translations[currentLanguage];

  const tabs = [
    { id: 'select', name: t.selectJersey, icon: 'Shirt', component: 'selector' },
    { id: 'customize', name: t.customize, icon: 'Settings', component: 'customization' },
    { id: 'inspiration', name: t.inspiration, icon: 'Lightbulb', component: 'inspiration' },
    { id: 'pricing', name: t.pricing, icon: 'Calculator', component: 'pricing' }
  ];

  const handleJerseySelect = (jersey) => {
    setSelectedJersey(jersey);
    setActiveTab('customize');
  };

  const handleCustomizationChange = (newCustomization) => {
    setCustomization(newCustomization);
  };

  const handleSaveDesign = () => {
    if (!selectedJersey) return;

    const design = {
      id: Date.now(),
      jersey: selectedJersey,
      customization: customization,
      createdAt: new Date().toISOString(),
      name: `${selectedJersey.team} Custom ${customization.playerName || 'Design'}`
    };

    const updatedSavedDesigns = [...savedDesigns, design];
    setSavedDesigns(updatedSavedDesigns);
    localStorage.setItem('savedDesigns', JSON.stringify(updatedSavedDesigns));
    
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleAddToCart = () => {
    if (!selectedJersey || !customization.size) return;

    // Mock add to cart functionality
    const cartItem = {
      id: Date.now(),
      jersey: selectedJersey,
      customization: customization,
      quantity: 1,
      addedAt: new Date().toISOString()
    };

    // In a real app, this would be handled by a cart context or state management
    console.log('Adding to cart:', cartItem);
    
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleApplyDesign = (jersey, designCustomization) => {
    setSelectedJersey(jersey);
    setCustomization(designCustomization);
    setActiveTab('customize');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'select':
        return (
          <JerseySelector
            onJerseySelect={handleJerseySelect}
            selectedJersey={selectedJersey}
          />
        );
      case 'customize':
        return (
          <CustomizationPanel
            customization={customization}
            onCustomizationChange={handleCustomizationChange}
            selectedJersey={selectedJersey}
          />
        );
      case 'inspiration':
        return (
          <InspirationGallery
            onApplyDesign={handleApplyDesign}
          />
        );
      case 'pricing':
        return (
          <PricingBreakdown
            selectedJersey={selectedJersey}
            customization={customization}
            onSaveDesign={handleSaveDesign}
            onAddToCart={handleAddToCart}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t.title} - Jersey Hub</title>
        <meta name="description" content={t.description} />
      </Helmet>

      <Header />

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 bg-success text-success-foreground px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-slide-in">
          <Icon name="Check" size={20} />
          <span>{selectedJersey ? t.addedToCart : t.designSaved}</span>
        </div>
      )}

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                {t.title}
              </h1>
              <p className="text-xl text-text-secondary mb-2">{t.subtitle}</p>
              <p className="text-text-tertiary max-w-2xl mx-auto">{t.description}</p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-8 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Object.entries(t.steps).map(([key, description], index) => (
                <div key={key} className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-primary text-primary-foreground' : 'bg-surface-hover text-text-secondary'
                    }`}>
                      {index + 1}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block w-full h-0.5 bg-border ml-4" />
                    )}
                  </div>
                  <p className="text-sm text-text-secondary">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Preview */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <JerseyPreview
                    selectedJersey={selectedJersey}
                    customization={customization}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                  />
                </div>
              </div>

              {/* Right Column - Tabs and Content */}
              <div className="lg:col-span-2">
                {/* Tab Navigation */}
                <div className="bg-surface rounded-lg border border-border mb-6">
                  <div className="flex overflow-x-auto">
                    {tabs.map((tab, index) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                          activeTab === tab.id
                            ? 'border-primary text-primary bg-primary-50' :'border-transparent text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                        }`}
                      >
                        <Icon name={tab.icon} size={16} />
                        <span>{tab.name}</span>
                        {index < tabs.length - 1 && selectedJersey && (
                          <Icon name="ChevronRight" size={14} className="ml-2 opacity-50" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="min-h-[600px]">
                  {renderTabContent()}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Saved Designs Section */}
        {savedDesigns.length > 0 && (
          <section className="py-12 bg-surface border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">Your Saved Designs</h2>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Trash2"
                  onClick={() => {
                    setSavedDesigns([]);
                    localStorage.removeItem('savedDesigns');
                  }}
                >
                  Clear All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {savedDesigns.slice(-8).map((design) => (
                  <div
                    key={design.id}
                    className="bg-background rounded-lg border border-border p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleApplyDesign(design.jersey, design.customization)}
                  >
                    <div className="aspect-[3/4] mb-3 bg-surface rounded overflow-hidden">
                      <img
                        src={design.jersey.image}
                        alt={design.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-text-primary text-sm mb-1">{design.name}</h4>
                    <p className="text-xs text-text-secondary">
                      {new Date(design.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Authentic Materials</h3>
                <p className="text-text-secondary">
                  Official team-licensed jerseys with premium quality materials and authentic styling
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-success-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-success" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Fast Production</h3>
                <p className="text-text-secondary">
                  Quick turnaround times with express shipping options available for urgent orders
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="RotateCcw" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Perfect Fit Guarantee</h3>
                <p className="text-text-secondary">
                  Not satisfied with the fit? We offer free exchanges within 30 days of purchase
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Jersey Hub. All rights reserved.
            </p>
            <p className="text-xs opacity-60 mt-2">
              Authentic jerseys, authentic passion. Design your legacy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomizationStudio;