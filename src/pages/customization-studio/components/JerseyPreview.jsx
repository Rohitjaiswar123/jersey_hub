import React from 'react';
import Image from '../../../components/AppImage';

const JerseyPreview = ({ 
  selectedJersey, 
  customization, 
  viewMode, 
  onViewModeChange 
}) => {
  const getJerseyImage = () => {
    if (!selectedJersey) return '/assets/images/no_image.png';
    
    const baseUrl = selectedJersey.images?.[viewMode] || selectedJersey.image;
    return baseUrl || '/assets/images/no_image.png';
  };

  const renderCustomization = () => {
    if (!customization.playerName && !customization.playerNumber) return null;

    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          {customization.playerName && (
            <div 
              className="text-2xl font-bold mb-2"
              style={{ 
                color: customization.textColor,
                fontFamily: customization.fontStyle 
              }}
            >
              {customization.playerName}
            </div>
          )}
          {customization.playerNumber && (
            <div 
              className="text-6xl font-bold"
              style={{ 
                color: customization.textColor,
                fontFamily: customization.fontStyle 
              }}
            >
              {customization.playerNumber}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPatches = () => {
    if (!customization.patches || customization.patches.length === 0) return null;

    return (
      <div className="absolute inset-0 pointer-events-none">
        {customization.patches.map((patch, index) => (
          <div
            key={index}
            className="absolute w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              top: patch.position?.top || '20%',
              left: patch.position?.left || '10%'
            }}
          >
            {patch.type === 'captain' && 'C'}
            {patch.type === 'memorial' && 'M'}
            {patch.type === 'championship' && '★'}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-surface rounded-lg p-6 border border-border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Jersey Preview</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onViewModeChange('front')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              viewMode === 'front' ?'bg-primary text-primary-foreground' :'bg-surface-hover text-text-secondary hover:text-text-primary'
            }`}
          >
            Front
          </button>
          <button
            onClick={() => onViewModeChange('back')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              viewMode === 'back' ?'bg-primary text-primary-foreground' :'bg-surface-hover text-text-secondary hover:text-text-primary'
            }`}
          >
            Back
          </button>
        </div>
      </div>

      <div className="relative aspect-[3/4] bg-background-secondary rounded-lg overflow-hidden">
        <Image
          src={getJerseyImage()}
          alt={`${selectedJersey?.team || 'Jersey'} ${viewMode} view`}
          className="w-full h-full object-contain"
        />
        
        {viewMode === 'back' && renderCustomization()}
        {renderPatches()}
        
        {!selectedJersey && (
          <div className="absolute inset-0 flex items-center justify-center text-text-tertiary">
            <div className="text-center">
              <div className="text-4xl mb-2">👕</div>
              <p>Select a jersey to start customizing</p>
            </div>
          </div>
        )}
      </div>

      {selectedJersey && (
        <div className="mt-4 text-center">
          <h4 className="font-medium text-text-primary">{selectedJersey.team}</h4>
          <p className="text-sm text-text-secondary">{selectedJersey.style}</p>
          <p className="text-sm text-text-tertiary">Size: {customization.size}</p>
        </div>
      )}
    </div>
  );
};

export default JerseyPreview;