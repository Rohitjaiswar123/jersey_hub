import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const JerseySelector = ({ onJerseySelect, selectedJersey }) => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');

  const teams = [
    { id: 'lakers', name: 'Los Angeles Lakers', sport: 'NBA' },
    { id: 'warriors', name: 'Golden State Warriors', sport: 'NBA' },
    { id: 'patriots', name: 'New England Patriots', sport: 'NFL' },
    { id: 'cowboys', name: 'Dallas Cowboys', sport: 'NFL' },
    { id: 'yankees', name: 'New York Yankees', sport: 'MLB' },
    { id: 'dodgers', name: 'Los Angeles Dodgers', sport: 'MLB' },
    { id: 'barcelona', name: 'FC Barcelona', sport: 'Soccer' },
    { id: 'madrid', name: 'Real Madrid', sport: 'Soccer' }
  ];

  const jerseyStyles = [
    { id: 'home', name: 'Home Jersey', description: 'Classic home colors' },
    { id: 'away', name: 'Away Jersey', description: 'Traditional away colors' },
    { id: 'alternate', name: 'Alternate Jersey', description: 'Special edition design' },
    { id: 'throwback', name: 'Throwback Jersey', description: 'Vintage inspired' }
  ];

  const availableJerseys = [
    {
      id: 'lakers-home',
      team: 'Los Angeles Lakers',
      teamId: 'lakers',
      style: 'Home Jersey',
      styleId: 'home',
      price: 120,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      images: {
        front: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
        back: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop'
      }
    },
    {
      id: 'warriors-home',
      team: 'Golden State Warriors',
      teamId: 'warriors',
      style: 'Home Jersey',
      styleId: 'home',
      price: 125,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=500&fit=crop',
      images: {
        front: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=500&fit=crop',
        back: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=500&fit=crop'
      }
    },
    {
      id: 'patriots-home',
      team: 'New England Patriots',
      teamId: 'patriots',
      style: 'Home Jersey',
      styleId: 'home',
      price: 110,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      images: {
        front: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
        back: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop'
      }
    },
    {
      id: 'cowboys-home',
      team: 'Dallas Cowboys',
      teamId: 'cowboys',
      style: 'Home Jersey',
      styleId: 'home',
      price: 115,
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=500&fit=crop',
      images: {
        front: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=500&fit=crop',
        back: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=500&fit=crop'
      }
    }
  ];

  const filteredJerseys = availableJerseys.filter(jersey => {
    const teamMatch = !selectedTeam || jersey.teamId === selectedTeam;
    const styleMatch = !selectedStyle || jersey.styleId === selectedStyle;
    return teamMatch && styleMatch;
  });

  const handleJerseySelect = (jersey) => {
    onJerseySelect(jersey);
  };

  return (
    <div className="bg-surface rounded-lg p-6 border border-border">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Select Jersey</h3>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Team</label>
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Teams</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>
                {team.name} ({team.sport})
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Style</label>
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Styles</option>
            {jerseyStyles.map(style => (
              <option key={style.id} value={style.id}>
                {style.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Jersey Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJerseys.map(jersey => (
          <div
            key={jersey.id}
            onClick={() => handleJerseySelect(jersey)}
            className={`relative cursor-pointer rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
              selectedJersey?.id === jersey.id
                ? 'border-primary bg-primary-50' :'border-border bg-background hover:border-primary-300'
            }`}
          >
            <div className="aspect-[3/4] p-4">
              <Image
                src={jersey.image}
                alt={`${jersey.team} ${jersey.style}`}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            
            <div className="p-3 border-t border-border">
              <h4 className="font-medium text-text-primary text-sm">{jersey.team}</h4>
              <p className="text-xs text-text-secondary">{jersey.style}</p>
              <p className="text-sm font-semibold text-primary mt-1">${jersey.price}</p>
            </div>

            {selectedJersey?.id === jersey.id && (
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                <Icon name="Check" size={16} />
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredJerseys.length === 0 && (
        <div className="text-center py-8 text-text-tertiary">
          <Icon name="Search" size={48} className="mx-auto mb-2 opacity-50" />
          <p>No jerseys found matching your filters</p>
          <p className="text-sm">Try adjusting your team or style selection</p>
        </div>
      )}
    </div>
  );
};

export default JerseySelector;