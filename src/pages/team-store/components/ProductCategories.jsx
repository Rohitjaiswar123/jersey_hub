import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCategories = ({ selectedCategory, onCategoryChange, selectedTeam }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    {
      id: 'current-roster',
      name: 'Current Roster',
      icon: 'Users',
      count: 24,
      description: 'Active players and current season jerseys'
    },
    {
      id: 'legends',
      name: 'Legends',
      icon: 'Crown',
      count: 18,
      description: 'Hall of Fame players and retired numbers'
    },
    {
      id: 'vintage',
      name: 'Vintage Classics',
      icon: 'Clock',
      count: 32,
      description: 'Historic jerseys from past decades'
    },
    {
      id: 'championship',
      name: 'Championship Editions',
      icon: 'Trophy',
      count: 12,
      description: 'Championship winning season jerseys'
    },
    {
      id: 'special',
      name: 'Special Editions',
      icon: 'Star',
      count: 8,
      description: 'Limited releases and commemorative jerseys'
    },
    {
      id: 'youth',
      name: 'Youth & Kids',
      icon: 'Heart',
      count: 16,
      description: 'Jerseys sized for young fans'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Items', icon: 'Grid3X3' },
    { id: 'jersey', name: 'Jerseys', icon: 'Shirt' },
    { id: 'authentic', name: 'Authentic', icon: 'Shield' },
    { id: 'replica', name: 'Replica', icon: 'Copy' },
    { id: 'custom', name: 'Customizable', icon: 'Palette' }
  ];

  const teamColors = {
    lakers: 'from-purple-600 to-yellow-500',
    warriors: 'from-blue-600 to-yellow-500',
    celtics: 'from-green-600 to-yellow-500'
  };

  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover authentic jerseys across different eras and collections. From current stars to legendary players, find the perfect jersey to represent your team pride.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "primary" : "ghost"}
              onClick={() => setActiveFilter(filter.id)}
              iconName={filter.icon}
              iconPosition="left"
              className="text-sm"
            >
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${teamColors[selectedTeam] || teamColors.lakers} p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                selectedCategory === category.id ? 'ring-4 ring-white ring-opacity-50' : ''
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4">
                  <Icon name={category.icon} size={80} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <Icon name={category.icon} size={24} className="text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white font-semibold text-sm">
                      {category.count} items
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {category.description}
                </p>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 p-0"
                  >
                    Shop Now
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                  
                  {selectedCategory === category.id && (
                    <div className="bg-white rounded-full p-1">
                      <Icon name="Check" size={16} className="text-green-600" />
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">150+</div>
            <div className="text-sm text-text-secondary">Total Jerseys</div>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-text-secondary">Authentic</div>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-text-secondary">Support</div>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">Free</div>
            <div className="text-sm text-text-secondary">Shipping</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;