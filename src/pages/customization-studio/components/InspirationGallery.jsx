import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InspirationGallery = ({ onApplyDesign }) => {
  const [selectedCategory, setSelectedCategory] = useState('popular');

  const categories = [
    { id: 'popular', name: 'Popular', icon: 'TrendingUp' },
    { id: 'creative', name: 'Creative', icon: 'Palette' },
    { id: 'classic', name: 'Classic', icon: 'Star' },
    { id: 'recent', name: 'Recent', icon: 'Clock' }
  ];

  const inspirationDesigns = [
    {
      id: 1,
      category: 'popular',
      title: 'Lakers Legend',
      playerName: 'JAMES',
      playerNumber: '23',
      team: 'Los Angeles Lakers',
      style: 'Home Jersey',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
      likes: 1247,
      fontStyle: 'Impact, sans-serif',
      textColor: '#FFD700',
      patches: [{ type: 'captain', name: 'Captain Patch', price: 15 }],
      size: 'L'
    },
    {
      id: 2,
      category: 'creative',
      title: 'Warrior Spirit',
      playerName: 'CURRY',
      playerNumber: '30',
      team: 'Golden State Warriors',
      style: 'Home Jersey',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=400&fit=crop',
      likes: 892,
      fontStyle: 'Arial, sans-serif',
      textColor: '#FFFFFF',
      patches: [{ type: 'championship', name: 'Championship Patch', price: 25 }],
      size: 'M'
    },
    {
      id: 3,
      category: 'classic',
      title: 'Patriot Pride',
      playerName: 'BRADY',
      playerNumber: '12',
      team: 'New England Patriots',
      style: 'Home Jersey',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
      likes: 2156,
      fontStyle: 'Times New Roman, serif',
      textColor: '#FFFFFF',
      patches: [],
      size: 'XL'
    },
    {
      id: 4,
      category: 'recent',
      title: 'Cowboys Classic',
      playerName: 'PRESCOTT',
      playerNumber: '4',
      team: 'Dallas Cowboys',
      style: 'Home Jersey',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=300&h=400&fit=crop',
      likes: 634,
      fontStyle: 'Helvetica, sans-serif',
      textColor: '#000000',
      patches: [{ type: 'memorial', name: 'Memorial Patch', price: 20 }],
      size: 'L'
    },
    {
      id: 5,
      category: 'popular',
      title: 'Golden State Glory',
      playerName: 'THOMPSON',
      playerNumber: '11',
      team: 'Golden State Warriors',
      style: 'Away Jersey',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=400&fit=crop',
      likes: 1089,
      fontStyle: 'Impact, sans-serif',
      textColor: '#FFD700',
      patches: [{ type: 'captain', name: 'Captain Patch', price: 15 }],
      size: 'M'
    },
    {
      id: 6,
      category: 'creative',
      title: 'Purple Reign',
      playerName: 'CUSTOM',
      playerNumber: '88',
      team: 'Los Angeles Lakers',
      style: 'Alternate Jersey',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
      likes: 756,
      fontStyle: 'Arial, sans-serif',
      textColor: '#FFFFFF',
      patches: [
        { type: 'championship', name: 'Championship Patch', price: 25 },
        { type: 'memorial', name: 'Memorial Patch', price: 20 }
      ],
      size: 'L'
    }
  ];

  const filteredDesigns = inspirationDesigns.filter(design => 
    design.category === selectedCategory
  );

  const handleApplyDesign = (design) => {
    const customization = {
      playerName: design.playerName,
      playerNumber: design.playerNumber,
      fontStyle: design.fontStyle,
      textColor: design.textColor,
      patches: design.patches,
      size: design.size
    };

    const jersey = {
      id: `${design.team.toLowerCase().replace(/\s+/g, '-')}-${design.style.toLowerCase().replace(/\s+/g, '-')}`,
      team: design.team,
      style: design.style,
      price: 120,
      image: design.image,
      images: {
        front: design.image,
        back: design.image
      }
    };

    onApplyDesign(jersey, customization);
  };

  return (
    <div className="bg-surface rounded-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Inspiration Gallery</h3>
        <Icon name="Lightbulb" size={20} className="text-text-secondary" />
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-1 mb-6 bg-background-secondary rounded-lg p-1">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex-1 justify-center ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Design Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDesigns.map(design => (
          <div
            key={design.id}
            className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="aspect-[3/4] relative">
              <Image
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with customization preview */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <div className="text-lg font-bold mb-1">{design.playerName}</div>
                  <div className="text-3xl font-bold">{design.playerNumber}</div>
                </div>
              </div>

              {/* Patches indicator */}
              {design.patches.length > 0 && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-yellow-900 text-xs px-2 py-1 rounded-full font-medium">
                  {design.patches.length} Patch{design.patches.length > 1 ? 'es' : ''}
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-text-primary">{design.title}</h4>
                <div className="flex items-center space-x-1 text-text-secondary">
                  <Icon name="Heart" size={14} />
                  <span className="text-xs">{design.likes}</span>
                </div>
              </div>
              
              <p className="text-sm text-text-secondary mb-2">{design.team}</p>
              
              <div className="flex items-center justify-between text-xs text-text-tertiary mb-3">
                <span>Size: {design.size}</span>
                <span>{design.playerName} #{design.playerNumber}</span>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleApplyDesign(design)}
                className="w-full"
                iconName="Copy"
                iconPosition="left"
              >
                Apply Design
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredDesigns.length === 0 && (
        <div className="text-center py-8 text-text-tertiary">
          <Icon name="Image" size={48} className="mx-auto mb-2 opacity-50" />
          <p>No designs found in this category</p>
          <p className="text-sm">Check back later for new inspiration</p>
        </div>
      )}

      {/* Community Contribution CTA */}
      <div className="mt-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 border border-primary-200">
        <div className="flex items-center space-x-3">
          <div className="bg-primary text-primary-foreground rounded-full p-2">
            <Icon name="Users" size={20} />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-text-primary">Share Your Design</h4>
            <p className="text-sm text-text-secondary">
              Create something amazing? Share it with the community and inspire others!
            </p>
          </div>
          <Button variant="primary" size="sm">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InspirationGallery;