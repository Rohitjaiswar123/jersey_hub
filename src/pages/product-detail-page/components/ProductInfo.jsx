import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Basic Info */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
            {product.category}
          </span>
          <div className="authentication-badge">
            <Icon name="Shield" size={14} className="mr-1" />
            Authenticated
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
        <p className="text-lg text-text-secondary mb-4">{product.team} • {product.season}</p>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={16}
                className={i < Math.floor(product.rating) ? 'text-warning fill-current' : 'text-border'}
              />
            ))}
            <span className="text-sm text-text-secondary ml-2">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xl text-text-tertiary line-through">${product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded">
              Save {product.discount}%
            </span>
          )}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-primary">Size</h3>
          <button className="text-sm text-accent hover:text-accent-600 flex items-center space-x-1">
            <Icon name="Ruler" size={14} />
            <span>Size Guide</span>
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-2 mb-4">
          {product.sizes.map((size) => (
            <button
              key={size.size}
              onClick={() => handleSizeSelect(size.size)}
              disabled={!size.available}
              className={`p-3 border rounded-lg text-center transition-all duration-200 ${
                selectedSize === size.size
                  ? 'border-primary bg-primary text-primary-foreground'
                  : size.available
                  ? 'border-border hover:border-primary' :'border-border bg-surface text-text-tertiary cursor-not-allowed'
              }`}
            >
              <div className="font-medium">{size.size}</div>
              {!size.available && (
                <div className="text-xs mt-1">Out of Stock</div>
              )}
            </button>
          ))}
        </div>

        {selectedSize && (
          <div className="bg-surface p-3 rounded-lg">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Info" size={14} />
              <span>Size {selectedSize} fits chest 38-40 inches</span>
            </div>
          </div>
        )}
      </div>

      {/* Quantity Selection */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Quantity</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={decrementQuantity}
              className="p-2 hover:bg-surface transition-colors"
              style={{ width: '40px', height: '40px' }}
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="p-2 hover:bg-surface transition-colors"
              style={{ width: '40px', height: '40px' }}
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
          <span className="text-sm text-text-secondary">
            {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="primary"
          fullWidth
          disabled={!selectedSize}
          className="py-3"
        >
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Add to Cart - ${(product.price * quantity).toFixed(2)}
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" fullWidth>
            <Icon name="Heart" size={18} className="mr-2" />
            Wishlist
          </Button>
          <Button variant="outline" fullWidth>
            <Icon name="Share2" size={18} className="mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Product Features */}
      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Product Features</h3>
        <div className="space-y-3">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span className="text-sm text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Info */}
      <div className="bg-surface p-4 rounded-lg">
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="Truck" size={20} className="text-primary" />
          <div>
            <h4 className="font-medium text-primary">Free Shipping</h4>
            <p className="text-sm text-text-secondary">On orders over $75</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="RotateCcw" size={20} className="text-primary" />
          <div>
            <h4 className="font-medium text-primary">Easy Returns</h4>
            <p className="text-sm text-text-secondary">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;