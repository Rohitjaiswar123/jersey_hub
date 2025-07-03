import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingBreakdown = ({ 
  selectedJersey, 
  customization, 
  onSaveDesign, 
  onAddToCart 
}) => {
  const calculateTotal = () => {
    if (!selectedJersey) return 0;
    
    let total = selectedJersey.price;
    
    // Add customization costs
    if (customization.playerName) total += 15;
    if (customization.playerNumber) total += 10;
    if (customization.fontStyle && customization.fontStyle !== 'Arial, sans-serif') total += 5;
    
    // Add patch costs
    if (customization.patches) {
      total += customization.patches.reduce((sum, patch) => sum + patch.price, 0);
    }
    
    return total;
  };

  const getProductionTime = () => {
    if (!selectedJersey) return '';
    
    const hasCustomization = customization.playerName || customization.playerNumber;
    const hasPatches = customization.patches && customization.patches.length > 0;
    
    if (hasCustomization || hasPatches) {
      return '7-10 business days';
    }
    return '2-3 business days';
  };

  const breakdownItems = [];
  
  if (selectedJersey) {
    breakdownItems.push({
      name: `${selectedJersey.team} ${selectedJersey.style}`,
      price: selectedJersey.price,
      description: `Size: ${customization.size || 'Not selected'}`
    });
    
    if (customization.playerName) {
      breakdownItems.push({
        name: 'Custom Name',
        price: 15,
        description: `"${customization.playerName}"`
      });
    }
    
    if (customization.playerNumber) {
      breakdownItems.push({
        name: 'Custom Number',
        price: 10,
        description: `#${customization.playerNumber}`
      });
    }
    
    if (customization.fontStyle && customization.fontStyle !== 'Arial, sans-serif') {
      breakdownItems.push({
        name: 'Premium Font',
        price: 5,
        description: 'Custom typography'
      });
    }
    
    if (customization.patches) {
      customization.patches.forEach(patch => {
        breakdownItems.push({
          name: patch.name,
          price: patch.price,
          description: 'Special patch'
        });
      });
    }
  }

  const total = calculateTotal();
  const productionTime = getProductionTime();

  if (!selectedJersey) {
    return (
      <div className="bg-surface rounded-lg p-6 border border-border">
        <div className="text-center py-8 text-text-tertiary">
          <Icon name="Calculator" size={48} className="mx-auto mb-2 opacity-50" />
          <p>Select a jersey to see pricing</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-lg p-6 border border-border">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Order Summary</h3>
      
      {/* Breakdown Items */}
      <div className="space-y-3 mb-6">
        {breakdownItems.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <div className="flex-1">
              <p className="font-medium text-text-primary">{item.name}</p>
              {item.description && (
                <p className="text-sm text-text-secondary">{item.description}</p>
              )}
            </div>
            <span className="font-semibold text-text-primary">${item.price}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-text-primary">Total</span>
          <span className="text-2xl font-bold text-primary">${total}</span>
        </div>
      </div>

      {/* Production Time */}
      <div className="bg-background-secondary rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Clock" size={16} className="text-text-secondary" />
          <span className="text-sm font-medium text-text-primary">Production Time</span>
        </div>
        <p className="text-sm text-text-secondary">{productionTime}</p>
        <p className="text-xs text-text-tertiary mt-1">
          Plus shipping time based on selected method
        </p>
      </div>

      {/* Care Instructions Preview */}
      <div className="bg-background-secondary rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Info" size={16} className="text-text-secondary" />
          <span className="text-sm font-medium text-text-primary">Care Instructions</span>
        </div>
        <ul className="text-xs text-text-secondary space-y-1">
          <li>• Machine wash cold with like colors</li>
          <li>• Do not bleach or use fabric softener</li>
          <li>• Tumble dry low or hang dry</li>
          <li>• Iron inside out on low heat</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="primary"
          onClick={onAddToCart}
          className="w-full"
          iconName="ShoppingCart"
          iconPosition="left"
          disabled={!customization.size}
        >
          Add to Cart - ${total}
        </Button>
        
        <Button
          variant="outline"
          onClick={onSaveDesign}
          className="w-full"
          iconName="Heart"
          iconPosition="left"
        >
          Save Design
        </Button>
        
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            className="flex-1"
            iconName="Share2"
            iconPosition="left"
          >
            Share
          </Button>
          <Button
            variant="ghost"
            className="flex-1"
            iconName="Download"
            iconPosition="left"
          >
            Export
          </Button>
        </div>
      </div>

      {/* Size Warning */}
      {!customization.size && (
        <div className="mt-4 bg-warning-50 border border-warning-200 rounded-md p-3">
          <div className="flex items-center space-x-2">
            <Icon name="AlertTriangle" size={16} className="text-warning" />
            <p className="text-sm text-warning">Please select a size to continue</p>
          </div>
        </div>
      )}

      {/* Authenticity Guarantee */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center space-x-2 text-success">
          <Icon name="Shield" size={16} />
          <span className="text-sm font-medium">100% Authentic Guarantee</span>
        </div>
        <p className="text-xs text-text-tertiary mt-1">
          Official licensed merchandise with authenticity certificate
        </p>
      </div>
    </div>
  );
};

export default PricingBreakdown;