import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MyCollection = ({ collection, onAddJersey, onEditJersey, onRemoveJersey }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('dateAdded');
  const [filterBy, setFilterBy] = useState('all');

  const totalValue = collection.reduce((sum, item) => sum + item.estimatedValue, 0);
  const totalPaid = collection.reduce((sum, item) => sum + item.purchasePrice, 0);

  const filteredCollection = collection.filter(item => {
    if (filterBy === 'all') return true;
    return item.category === filterBy;
  });

  const sortedCollection = [...filteredCollection].sort((a, b) => {
    switch (sortBy) {
      case 'value':
        return b.estimatedValue - a.estimatedValue;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'team':
        return a.team.localeCompare(b.team);
      default:
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
  });

  const categories = [...new Set(collection.map(item => item.category))];

  return (
    <div className="bg-background rounded-lg border border-border p-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">My Jersey Collection</h2>
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <span>{collection.length} jerseys</span>
            <span>•</span>
            <span>Total Value: <strong className="text-success">${totalValue.toLocaleString()}</strong></span>
            <span>•</span>
            <span>Total Paid: <strong className="text-primary">${totalPaid.toLocaleString()}</strong></span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
          <Button variant="outline" iconName="Download" size="sm">
            Export
          </Button>
          <Button variant="primary" iconName="Plus" size="sm" onClick={onAddJersey}>
            Add Jersey
          </Button>
        </div>
      </div>

      {/* Collection Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={20} className="text-success" />
            <span className="font-medium text-text-primary">Appreciation</span>
          </div>
          <p className="text-2xl font-bold text-success">
            +${(totalValue - totalPaid).toLocaleString()}
          </p>
          <p className="text-sm text-text-secondary">
            {((totalValue - totalPaid) / totalPaid * 100).toFixed(1)}% gain
          </p>
        </div>
        
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Star" size={20} className="text-warning" />
            <span className="font-medium text-text-primary">Most Valuable</span>
          </div>
          <p className="text-lg font-bold text-primary">
            ${Math.max(...collection.map(item => item.estimatedValue)).toLocaleString()}
          </p>
          <p className="text-sm text-text-secondary">Single jersey value</p>
        </div>
        
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Calendar" size={20} className="text-primary" />
            <span className="font-medium text-text-primary">Oldest Jersey</span>
          </div>
          <p className="text-lg font-bold text-primary">
            {Math.min(...collection.map(item => item.year))}
          </p>
          <p className="text-sm text-text-secondary">Vintage collection</p>
        </div>
        
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Shield" size={20} className="text-accent" />
            <span className="font-medium text-text-primary">Authenticated</span>
          </div>
          <p className="text-lg font-bold text-accent">
            {collection.filter(item => item.authenticated).length}
          </p>
          <p className="text-sm text-text-secondary">of {collection.length} jerseys</p>
        </div>
      </div>

      {/* Filters and View Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="text-sm border border-border rounded-md px-3 py-2 bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-border rounded-md px-3 py-2 bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="dateAdded">Recently Added</option>
            <option value="value">Highest Value</option>
            <option value="name">Name A-Z</option>
            <option value="team">Team</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            iconName="Grid3X3"
          />
          <Button
            variant={viewMode === 'list' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            iconName="List"
          />
        </div>
      </div>

      {/* Collection Display */}
      {sortedCollection.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="Package" size={48} className="text-text-tertiary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">No jerseys in your collection</h3>
          <p className="text-text-secondary mb-4">Start building your collection by adding your first jersey</p>
          <Button variant="primary" iconName="Plus" onClick={onAddJersey}>
            Add Your First Jersey
          </Button>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {sortedCollection.map((jersey) => (
            <div key={jersey.id} className={`border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow ${viewMode === 'list' ? 'flex items-center p-4' : ''}`}>
              <div className={`relative ${viewMode === 'list' ? 'w-20 h-20 flex-shrink-0 mr-4' : ''}`}>
                <Image
                  src={jersey.image}
                  alt={jersey.name}
                  className={`object-cover ${viewMode === 'list' ? 'w-full h-full rounded-lg' : 'w-full h-48'}`}
                />
                {jersey.authenticated && (
                  <div className="absolute top-2 left-2 bg-success text-success-foreground rounded-full p-1">
                    <Icon name="Shield" size={12} />
                  </div>
                )}
                {jersey.rare && (
                  <div className="absolute top-2 right-2 bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-bold">
                    Rare
                  </div>
                )}
              </div>
              
              <div className={`${viewMode === 'list' ? 'flex-1' : 'p-4'}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-text-primary text-sm leading-tight">{jersey.name}</h3>
                  <div className="flex items-center space-x-1">
                    <button onClick={() => onEditJersey(jersey.id)} className="text-text-secondary hover:text-primary">
                      <Icon name="Edit" size={14} />
                    </button>
                    <button onClick={() => onRemoveJersey(jersey.id)} className="text-text-secondary hover:text-error">
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                </div>
                
                <p className="text-xs text-text-secondary mb-2">{jersey.team} • {jersey.year} • Size {jersey.size}</p>
                
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-text-secondary">Estimated Value</p>
                    <p className="text-lg font-bold text-success">${jersey.estimatedValue.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-secondary">Paid</p>
                    <p className="text-sm font-medium text-text-primary">${jersey.purchasePrice.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-text-tertiary">
                  <span>Added {new Date(jersey.dateAdded).toLocaleDateString()}</span>
                  <span className={jersey.estimatedValue > jersey.purchasePrice ? 'text-success' : 'text-error'}>
                    {jersey.estimatedValue > jersey.purchasePrice ? '+' : ''}
                    ${(jersey.estimatedValue - jersey.purchasePrice).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollection;