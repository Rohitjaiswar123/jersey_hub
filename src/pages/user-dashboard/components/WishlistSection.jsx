import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WishlistSection = ({ wishlistItems, onRemoveItem, onMoveToCart }) => {
  const [sortBy, setSortBy] = useState('dateAdded');

  const sortedItems = [...wishlistItems].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
  });

  return (
    <div className="bg-background rounded-lg border border-border p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary mb-4 sm:mb-0">My Wishlist</h2>
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-border rounded-md px-3 py-2 bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="dateAdded">Recently Added</option>
            <option value="name">Name A-Z</option>
            <option value="price">Price Low to High</option>
            <option value="priceDesc">Price High to Low</option>
          </select>
          <Button variant="outline" iconName="Share" size="sm">
            Share List
          </Button>
        </div>
      </div>

      {sortedItems.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="Heart" size={48} className="text-text-tertiary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">Your wishlist is empty</h3>
          <p className="text-text-secondary mb-4">Start adding jerseys you love to keep track of them</p>
          <Button variant="primary" iconName="Plus">
            Browse Jerseys
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <div key={item.id} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.onSale && (
                  <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                    {item.discount}% OFF
                  </div>
                )}
                {item.lowStock && (
                  <div className="absolute top-2 right-2 bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-bold">
                    Low Stock
                  </div>
                )}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute top-2 right-2 bg-background bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                >
                  <Icon name="X" size={16} className="text-text-secondary hover:text-error" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-text-primary text-sm leading-tight">{item.name}</h3>
                  <div className="flex items-center space-x-1 ml-2">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span className="text-xs text-text-secondary">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-xs text-text-secondary mb-2">{item.team} • {item.category}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {item.onSale ? (
                      <>
                        <span className="text-lg font-bold text-accent">${item.salePrice}</span>
                        <span className="text-sm text-text-tertiary line-through">${item.price}</span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-primary">${item.price}</span>
                    )}
                  </div>
                  {item.priceDropAlert && (
                    <div className="flex items-center space-x-1 text-success">
                      <Icon name="TrendingDown" size={14} />
                      <span className="text-xs font-medium">Price Drop!</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-text-secondary">Size:</span>
                    <select className="text-xs border border-border rounded px-2 py-1 bg-background">
                      {item.availableSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${item.inStock ? 'bg-success' : 'bg-error'}`}></div>
                    <span className="text-xs text-text-secondary">
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    onClick={() => onMoveToCart(item.id)}
                    disabled={!item.inStock}
                    iconName="ShoppingCart"
                  >
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm" iconName="Eye">
                    View
                  </Button>
                </div>
                
                <p className="text-xs text-text-tertiary mt-2">
                  Added {new Date(item.dateAdded).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistSection;