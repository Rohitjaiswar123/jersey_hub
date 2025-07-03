import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ currentProduct }) => {
  const relatedProducts = [
    {
      id: 2,
      name: 'Lakers Home Jersey',
      team: 'Los Angeles Lakers',
      player: 'LeBron James',
      price: 149.99,
      originalPrice: 179.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 234,
      isAuthentic: true,
      category: 'NBA'
    },
    {
      id: 3,
      name: 'Warriors Away Jersey',
      team: 'Golden State Warriors',
      player: 'Stephen Curry',
      price: 159.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 189,
      isAuthentic: true,
      category: 'NBA'
    },
    {
      id: 4,
      name: 'Celtics Classic Jersey',
      team: 'Boston Celtics',
      player: 'Jayson Tatum',
      price: 139.99,
      originalPrice: 169.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 156,
      isAuthentic: true,
      category: 'NBA'
    },
    {
      id: 5,
      name: 'Heat Vice Jersey',
      team: 'Miami Heat',
      player: 'Jimmy Butler',
      price: 169.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 98,
      isAuthentic: true,
      category: 'NBA'
    }
  ];

  const complementaryProducts = [
    {
      id: 101,
      name: 'Team Cap',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&h=200&fit=crop',
      category: 'Accessories'
    },
    {
      id: 102,
      name: 'Team Shorts',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=200&h=200&fit=crop',
      category: 'Apparel'
    },
    {
      id: 103,
      name: 'Team Hoodie',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop',
      category: 'Apparel'
    },
    {
      id: 104,
      name: 'Team Socks',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=200&h=200&fit=crop',
      category: 'Accessories'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Similar Jerseys */}
      <div className="bg-background border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-primary">Similar Jerseys</h3>
          <Link
            to="/team-store"
            className="text-sm text-accent hover:text-accent-600 flex items-center space-x-1"
          >
            <span>View All</span>
            <Icon name="ArrowRight" size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-surface rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <div className="relative mb-4">
                  <div className="aspect-square bg-background rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {product.isAuthentic && (
                    <div className="absolute top-2 left-2">
                      <div className="bg-success text-success-foreground text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                        <Icon name="Shield" size={10} />
                        <span>Auth</span>
                      </div>
                    </div>
                  )}

                  <button className="absolute top-2 right-2 bg-background/80 hover:bg-background rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <Icon name="Heart" size={14} />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-1 text-xs text-text-tertiary">
                    <span>{product.category}</span>
                    <span>•</span>
                    <span>{product.team}</span>
                  </div>
                  
                  <h4 className="font-medium text-primary text-sm line-clamp-2">
                    {product.name}
                  </h4>
                  
                  <p className="text-sm text-text-secondary">{product.player}</p>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < Math.floor(product.rating) ? 'text-warning fill-current' : 'text-border'}
                      />
                    ))}
                    <span className="text-xs text-text-secondary ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-text-tertiary line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button variant="outline" fullWidth className="text-xs py-2">
                    <Icon name="ShoppingCart" size={14} className="mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complementary Products */}
      <div className="bg-background border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-primary">Complete Your Look</h3>
          <span className="text-sm text-text-secondary">Frequently bought together</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {complementaryProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-surface rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <div className="aspect-square bg-background rounded-lg overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-text-tertiary">{product.category}</span>
                  <h4 className="font-medium text-primary text-sm">{product.name}</h4>
                  <div className="font-bold text-primary">${product.price}</div>
                  
                  <Button variant="outline" fullWidth className="text-xs py-2">
                    <Icon name="Plus" size={12} className="mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-accent mb-1">Bundle & Save</h4>
              <p className="text-sm text-accent/80">
                Buy jersey + 2 accessories and save 15%
              </p>
            </div>
            <Button variant="accent" className="text-sm">
              Create Bundle
            </Button>
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="bg-background border border-border rounded-lg p-6">
        <h3 className="text-xl font-bold text-primary mb-6">Recently Viewed</h3>
        
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {relatedProducts.slice(0, 3).map((product) => (
            <div key={`recent-${product.id}`} className="flex-shrink-0 w-32">
              <div className="bg-surface rounded-lg p-3 hover:shadow-md transition-all duration-300">
                <div className="aspect-square bg-background rounded-lg overflow-hidden mb-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-xs font-medium text-primary line-clamp-2 mb-1">
                  {product.name}
                </h5>
                <div className="text-xs font-bold text-primary">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;