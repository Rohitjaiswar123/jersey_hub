import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const CustomizationSection = ({ product }) => {
  const [customName, setCustomName] = useState('');
  const [customNumber, setCustomNumber] = useState('');
  const [selectedFont, setSelectedFont] = useState('official');
  const [previewMode, setPreviewMode] = useState(false);

  const fontOptions = [
    { id: 'official', name: 'Official Team Font', price: 0 },
    { id: 'classic', name: 'Classic Block', price: 5 },
    { id: 'modern', name: 'Modern Script', price: 8 }
  ];

  const handleCustomizationToggle = () => {
    setPreviewMode(!previewMode);
  };

  const getCustomizationPrice = () => {
    let basePrice = 15; // Base customization fee
    const fontPrice = fontOptions.find(f => f.id === selectedFont)?.price || 0;
    return basePrice + fontPrice;
  };

  return (
    <div className="bg-background border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary">Customize Your Jersey</h3>
        <div className="flex items-center space-x-2">
          <Icon name="Palette" size={20} className="text-accent" />
          <span className="text-sm font-medium text-accent">+${getCustomizationPrice()}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Customization Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Player Name
            </label>
            <Input
              type="text"
              placeholder="Enter name (max 12 characters)"
              value={customName}
              onChange={(e) => setCustomName(e.target.value.slice(0, 12).toUpperCase())}
              maxLength={12}
              className="uppercase"
            />
            <p className="text-xs text-text-tertiary mt-1">
              {customName.length}/12 characters
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Jersey Number
            </label>
            <Input
              type="number"
              placeholder="Enter number (0-99)"
              value={customNumber}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 0 && value <= 99) {
                  setCustomNumber(e.target.value);
                }
              }}
              min="0"
              max="99"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Font Style
            </label>
            <div className="space-y-2">
              {fontOptions.map((font) => (
                <label
                  key={font.id}
                  className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedFont === font.id
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="font"
                      value={font.id}
                      checked={selectedFont === font.id}
                      onChange={(e) => setSelectedFont(e.target.value)}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="font-medium">{font.name}</span>
                  </div>
                  <span className="text-sm text-text-secondary">
                    {font.price === 0 ? 'Free' : `+$${font.price}`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-surface p-4 rounded-lg">
            <h4 className="font-medium text-primary mb-2">Customization Guidelines</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Names must be 12 characters or less</li>
              <li>• Numbers must be between 0-99</li>
              <li>• Official team fonts match player jerseys</li>
              <li>• Customization adds 2-3 business days to shipping</li>
            </ul>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-4">
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-medium text-primary mb-3">Live Preview</h4>
            <div className="relative bg-gradient-to-b from-primary to-primary-700 rounded-lg p-6 text-center">
              <div className="text-white">
                <div className="text-2xl font-bold mb-2">
                  {customName || 'YOUR NAME'}
                </div>
                <div className="text-4xl font-bold">
                  {customNumber || '00'}
                </div>
              </div>
              <div className="absolute top-2 right-2 text-xs text-white/70">
                {fontOptions.find(f => f.id === selectedFont)?.name}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              fullWidth
              onClick={handleCustomizationToggle}
            >
              <Icon name="Eye" size={18} className="mr-2" />
              {previewMode ? 'Exit Preview' : 'Full Preview'}
            </Button>

            <div className="bg-success/10 border border-success/20 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">
                  Authenticity Guaranteed
                </span>
              </div>
              <p className="text-xs text-success/80 mt-1">
                All customizations use official team specifications and materials
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customization Summary */}
      {(customName || customNumber) && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-primary">Customization Summary</h4>
              <p className="text-sm text-text-secondary">
                {customName && `Name: ${customName}`}
                {customName && customNumber && ' • '}
                {customNumber && `Number: ${customNumber}`}
              </p>
            </div>
            <div className="text-right">
              <div className="font-bold text-primary">+${getCustomizationPrice()}</div>
              <div className="text-xs text-text-secondary">Customization fee</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizationSection;