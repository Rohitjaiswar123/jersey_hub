import React from 'react';
import Input from '../../../components/ui/Input';

import Icon from '../../../components/AppIcon';

const CustomizationPanel = ({ 
  customization, 
  onCustomizationChange, 
  selectedJersey 
}) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  
  const fontStyles = [
    { id: 'default', name: 'Team Default', family: 'Arial, sans-serif' },
    { id: 'bold', name: 'Bold Impact', family: 'Impact, sans-serif' },
    { id: 'classic', name: 'Classic Serif', family: 'Times New Roman, serif' },
    { id: 'modern', name: 'Modern Sans', family: 'Helvetica, sans-serif' }
  ];

  const textColors = [
    { id: 'white', name: 'White', value: '#FFFFFF' },
    { id: 'black', name: 'Black', value: '#000000' },
    { id: 'gold', name: 'Gold', value: '#FFD700' },
    { id: 'silver', name: 'Silver', value: '#C0C0C0' },
    { id: 'red', name: 'Red', value: '#FF0000' },
    { id: 'blue', name: 'Blue', value: '#0000FF' }
  ];

  const patchTypes = [
    { id: 'captain', name: 'Captain Patch', price: 15, description: 'Leadership badge' },
    { id: 'memorial', name: 'Memorial Patch', price: 20, description: 'Honor tribute' },
    { id: 'championship', name: 'Championship Patch', price: 25, description: 'Victory celebration' }
  ];

  const handleInputChange = (field, value) => {
    onCustomizationChange({
      ...customization,
      [field]: value
    });
  };

  const handlePatchToggle = (patchType) => {
    const currentPatches = customization.patches || [];
    const existingPatch = currentPatches.find(p => p.type === patchType.id);
    
    let newPatches;
    if (existingPatch) {
      newPatches = currentPatches.filter(p => p.type !== patchType.id);
    } else {
      newPatches = [...currentPatches, {
        type: patchType.id,
        name: patchType.name,
        price: patchType.price,
        position: { top: '20%', left: '10%' }
      }];
    }
    
    onCustomizationChange({
      ...customization,
      patches: newPatches
    });
  };

  const validatePlayerNumber = (number) => {
    const num = parseInt(number);
    return number === '' || (num >= 0 && num <= 99);
  };

  const validatePlayerName = (name) => {
    return name.length <= 12;
  };

  if (!selectedJersey) {
    return (
      <div className="bg-surface rounded-lg p-6 border border-border">
        <div className="text-center py-8 text-text-tertiary">
          <Icon name="Settings" size={48} className="mx-auto mb-2 opacity-50" />
          <p>Select a jersey to start customizing</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-lg p-6 border border-border space-y-6">
      <h3 className="text-lg font-semibold text-text-primary">Customize Your Jersey</h3>
      
      {/* Size Selection */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Size</label>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => handleInputChange('size', size)}
              className={`py-2 px-3 text-sm font-medium rounded border transition-colors ${
                customization.size === size
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-text-primary border-border hover:border-primary-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Player Name */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Player Name
          <span className="text-text-tertiary ml-1">(Max 12 characters)</span>
        </label>
        <Input
          type="text"
          value={customization.playerName || ''}
          onChange={(e) => {
            if (validatePlayerName(e.target.value)) {
              handleInputChange('playerName', e.target.value.toUpperCase());
            }
          }}
          placeholder="Enter player name"
          maxLength={12}
          className="w-full"
        />
        <p className="text-xs text-text-tertiary mt-1">
          {(customization.playerName || '').length}/12 characters
        </p>
      </div>

      {/* Player Number */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Player Number
          <span className="text-text-tertiary ml-1">(0-99)</span>
        </label>
        <Input
          type="number"
          value={customization.playerNumber || ''}
          onChange={(e) => {
            if (validatePlayerNumber(e.target.value)) {
              handleInputChange('playerNumber', e.target.value);
            }
          }}
          placeholder="Enter number"
          min="0"
          max="99"
          className="w-full"
        />
      </div>

      {/* Font Style */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Font Style</label>
        <select
          value={customization.fontStyle || 'default'}
          onChange={(e) => {
            const selectedFont = fontStyles.find(f => f.id === e.target.value);
            handleInputChange('fontStyle', selectedFont?.family || 'Arial, sans-serif');
          }}
          className="w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {fontStyles.map(font => (
            <option key={font.id} value={font.id}>
              {font.name}
            </option>
          ))}
        </select>
      </div>

      {/* Text Color */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Text Color</label>
        <div className="grid grid-cols-3 gap-2">
          {textColors.map(color => (
            <button
              key={color.id}
              onClick={() => handleInputChange('textColor', color.value)}
              className={`flex items-center space-x-2 py-2 px-3 text-sm rounded border transition-colors ${
                customization.textColor === color.value
                  ? 'bg-primary-50 border-primary text-primary' :'bg-background border-border hover:border-primary-300'
              }`}
            >
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.value }}
              />
              <span>{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Patches */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Add Patches</label>
        <div className="space-y-2">
          {patchTypes.map(patch => {
            const isSelected = (customization.patches || []).some(p => p.type === patch.id);
            return (
              <div
                key={patch.id}
                className={`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-primary-50 border-primary' :'bg-background border-border hover:border-primary-300'
                }`}
                onClick={() => handlePatchToggle(patch)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    isSelected ? 'bg-primary border-primary' : 'border-border'
                  }`}>
                    {isSelected && <Icon name="Check" size={12} className="text-primary-foreground" />}
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{patch.name}</p>
                    <p className="text-xs text-text-secondary">{patch.description}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-primary">+${patch.price}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Validation Messages */}
      {customization.playerName && !validatePlayerName(customization.playerName) && (
        <div className="bg-error-50 border border-error-200 rounded-md p-3">
          <div className="flex items-center space-x-2">
            <Icon name="AlertCircle" size={16} className="text-error" />
            <p className="text-sm text-error">Player name must be 12 characters or less</p>
          </div>
        </div>
      )}

      {customization.playerNumber && !validatePlayerNumber(customization.playerNumber) && (
        <div className="bg-error-50 border border-error-200 rounded-md p-3">
          <div className="flex items-center space-x-2">
            <Icon name="AlertCircle" size={16} className="text-error" />
            <p className="text-sm text-error">Player number must be between 0 and 99</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizationPanel;