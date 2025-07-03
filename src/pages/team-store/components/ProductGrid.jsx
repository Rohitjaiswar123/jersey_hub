import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductGrid = ({ selectedCategory, selectedTeam }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const products = [
    {
      id: 1,
      name: 'LeBron James #23 Jersey',
      player: 'LeBron James',
      number: 23,
      category: 'current-roster',
      team: 'lakers',
      price: 149.99,
      originalPrice: 179.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      badge: 'Bestseller',
      rating: 4.8,
      reviews: 324,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Purple', 'Gold', 'White'],
      isAuthentic: true,
      isCustomizable: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Kobe Bryant #24 Legacy Jersey',
      player: 'Kobe Bryant',
      number: 24,
      category: 'legends',
      team: 'lakers',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      badge: 'Limited Edition',
      rating: 4.9,
      reviews: 567,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Purple', 'Gold'],
      isAuthentic: true,
      isCustomizable: false,
      inStock: true
    },
    {
      id: 3,
      name: 'Anthony Davis #3 Jersey',
      player: 'Anthony Davis',
      number: 3,
      category: 'current-roster',
      team: 'lakers',
      price: 139.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      badge: 'New Arrival',
      rating: 4.7,
      reviews: 189,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Purple', 'Gold', 'White'],
      isAuthentic: true,
      isCustomizable: true,
      inStock: true
    },
    {
      id: 4,
      name: '2020 Championship Jersey',
      player: 'Team Edition',
      number: null,
      category: 'championship',
      team: 'lakers',
      price: 179.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      badge: 'Championship',
      rating: 4.8,
      reviews: 445,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Gold'],
      isAuthentic: true,
      isCustomizable: true,
      inStock: true
    },
    {
      id: 5,
      name: 'Magic Johnson #32 Vintage',
      player: 'Magic Johnson',
      number: 32,
      category: 'vintage',
      team: 'lakers',
      price: 229.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      badge: 'Vintage',
      rating: 4.9,
      reviews: 234,
      sizes: ['M', 'L', 'XL'],
      colors: ['Purple', 'Gold'],
      isAuthentic: true,
      isCustomizable: false,
      inStock: false
    },
    {
      id: 6,
      name: 'Youth LeBron James Jersey',
      player: 'LeBron James',
      number: 23,
      category: 'youth',
      team: 'lakers',
      price: 89.99,
      originalPrice: 109.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      badge: 'Youth',
      rating: 4.6,
      reviews: 156,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Purple', 'Gold'],
      isAuthentic: true,
      isCustomizable: true,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return product.team === selectedTeam;
    return product.category === selectedCategory && product.team === selectedTeam;
  });

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Bestseller': return 'bg-green-500';
      case 'Limited Edition': return 'bg-purple-500';
      case 'New Arrival': return 'bg-blue-500';
      case 'Championship': return 'bg-yellow-500';
      case 'Vintage': return 'bg-orange-500';
      case 'Youth': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              {selectedCategory === 'all' ? 'All Products' : selectedCategory.split('-').map(word => 
                 word.charAt(0).toUpperCase() + word.slice(1)
               ).join(' ')}
            </h2>
            <p className="text-text-secondary">
              {filteredProducts.length} products found
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-border rounded-md px-3 py-2 bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex border border-border rounded-md overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                onClick={() => setViewMode('grid')}
                className="rounded-none border-0"
              >
                <Icon name="Grid3X3" size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'primary' : 'ghost'}
                onClick={() => setViewMode('list')}
                className="rounded-none border-0"
              >
                <Icon name="List" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' ?'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-48 h-48' : 'aspect-[3/4]'
              }`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-2 left-2 ${getBadgeColor(product.badge)} text-white text-xs font-semibold px-2 py-1 rounded`}>
                    {product.badge}
                  </div>
                )}

                {/* Authentication Badge */}
                {product.isAuthentic && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                    <Icon name="Shield" size={12} />
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <Button variant="primary" className="text-sm">
                    <Icon name="Eye" size={14} className="mr-1" />
                    Quick View
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-white/10 text-sm">
                    <Icon name="Heart" size={14} />
                  </Button>
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    {product.player && (
                      <p className="text-sm text-text-secondary">
                        {product.player} {product.number && `#${product.number}`}
                      </p>
                    )}
                  </div>
                  {product.isCustomizable && (
                    <Icon name="Palette" size={16} className="text-blue-500" />
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current' :'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-secondary">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Sizes */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.sizes.slice(0, 4).map((size) => (
                    <span
                      key={size}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {size}
                    </span>
                  ))}
                  {product.sizes.length > 4 && (
                    <span className="text-xs text-text-secondary">
                      +{product.sizes.length - 4} more
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-text-secondary line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="text-sm font-semibold text-green-600">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2 mt-4">
                  <Link to="/product-detail-page" className="flex-1">
                    <Button
                      variant="primary"
                      className="w-full"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </Link>
                  <Button variant="ghost" className="shrink-0">
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              Load More Products
              <Icon name="ChevronDown" size={16} className="ml-2" />
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Package" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              No products found
            </h3>
            <p className="text-text-secondary mb-4">
              Try adjusting your filters or browse other categories
            </p>
            <Button variant="primary">
              Browse All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;