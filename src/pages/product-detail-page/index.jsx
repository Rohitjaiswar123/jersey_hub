import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import CustomizationSection from './components/CustomizationSection';
import AuthenticationDetails from './components/AuthenticationDetails';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';
import JerseyStory from './components/JerseyStory';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock product data
  const product = {
    id: 1,
    name: "Lakers Championship Jersey",
    team: "Los Angeles Lakers",
    player: "LeBron James",
    season: "2023-24",
    category: "NBA",
    price: 159.99,
    originalPrice: 199.99,
    discount: 20,
    rating: 4.8,
    reviewCount: 342,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&sat=-100',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&hue=45',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&brightness=1.2',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&contrast=1.2'
    ],
    sizes: [
      { size: 'XS', available: true },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
      { size: 'XXL', available: false }
    ],
    features: [
      'Official NBA licensed product',
      'Nike Dri-FIT technology for moisture management',
      'Authentic team colors and logos',
      'Professional-grade stitching and construction',
      'Machine washable for easy care',
      'Comes with certificate of authenticity'
    ],
    description: `Experience the championship legacy with this authentic Lakers jersey. Crafted with premium materials and featuring official team branding, this jersey represents the pinnacle of basketball excellence. Whether you're cheering from the stands or showcasing your team pride, this jersey delivers both style and performance.`,
    specifications: {
      material: '100% Polyester',fit: 'Athletic Fit',care: 'Machine wash cold, tumble dry low',origin: 'Made in Vietnam',weight: '0.3 lbs'
    }
  };

  const translations = {
    en: {
      overview: 'Overview',
      customization: 'Customization',
      authentication: 'Authentication',
      reviews: 'Reviews',
      story: 'Jersey Story',
      relatedProducts: 'Related Products',
      breadcrumbHome: 'Home',
      breadcrumbTeamStore: 'Team Store',
      breadcrumbLakers: 'Lakers',
      productDetails: 'Product Details',
      specifications: 'Specifications',
      shippingReturns: 'Shipping & Returns',
      sizeGuide: 'Size Guide'
    },
    es: {
      overview: 'Resumen',
      customization: 'Personalización',
      authentication: 'Autenticación',
      reviews: 'Reseñas',
      story: 'Historia del Jersey',
      relatedProducts: 'Productos Relacionados',
      breadcrumbHome: 'Inicio',
      breadcrumbTeamStore: 'Tienda del Equipo',
      breadcrumbLakers: 'Lakers',
      productDetails: 'Detalles del Producto',
      specifications: 'Especificaciones',
      shippingReturns: 'Envío y Devoluciones',
      sizeGuide: 'Guía de Tallas'
    }
  };

  const t = translations[currentLanguage];

  const tabs = [
    { id: 'overview', label: t.overview, icon: 'Info' },
    { id: 'customization', label: t.customization, icon: 'Palette' },
    { id: 'authentication', label: t.authentication, icon: 'Shield' },
    { id: 'reviews', label: t.reviews, icon: 'Star' },
    { id: 'story', label: t.story, icon: 'BookOpen' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">{t.productDetails}</h3>
              <p className="text-text-secondary mb-6">{product.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">{t.specifications}</h4>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                        <span className="text-text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-medium text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-surface p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2 flex items-center">
                      <Icon name="Truck" size={16} className="mr-2" />
                      {t.shippingReturns}
                    </h5>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Free shipping on orders over $75</li>
                      <li>• 2-3 business days standard delivery</li>
                      <li>• 30-day return policy</li>
                      <li>• Free returns and exchanges</li>
                    </ul>
                  </div>
                  
                  <div className="bg-surface p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2 flex items-center">
                      <Icon name="Ruler" size={16} className="mr-2" />
                      {t.sizeGuide}
                    </h5>
                    <p className="text-sm text-text-secondary mb-2">
                      Unsure about sizing? Check our comprehensive size guide.
                    </p>
                    <button className="text-sm text-accent hover:text-accent-600 font-medium">
                      View Size Chart →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'customization':
        return <CustomizationSection product={product} />;
      case 'authentication':
        return <AuthenticationDetails product={product} />;
      case 'reviews':
        return <CustomerReviews product={product} />;
      case 'story':
        return <JerseyStory product={product} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/homepage" className="text-text-secondary hover:text-primary transition-colors">
                {t.breadcrumbHome}
              </Link>
              <Icon name="ChevronRight" size={14} className="text-text-tertiary" />
              <Link to="/team-store" className="text-text-secondary hover:text-primary transition-colors">
                {t.breadcrumbTeamStore}
              </Link>
              <Icon name="ChevronRight" size={14} className="text-text-tertiary" />
              <Link to="/team-store" className="text-text-secondary hover:text-primary transition-colors">
                {t.breadcrumbLakers}
              </Link>
              <Icon name="ChevronRight" size={14} className="text-text-tertiary" />
              <span className="text-primary font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div>
              <ProductImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Info */}
            <div>
              <ProductInfo product={product} />
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-12">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-surface p-1 rounded-lg overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-background text-primary shadow-sm'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              {renderTabContent()}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <RelatedProducts currentProduct={product} />
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-accent text-accent-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Icon name="MessageCircle" size={24} />
        </button>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-40">
        <div className="flex space-x-3">
          <button className="flex-1 bg-outline text-primary border border-primary rounded-lg py-3 font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Add to Cart
          </button>
          <button className="flex-1 bg-primary text-primary-foreground rounded-lg py-3 font-medium hover:bg-primary-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;