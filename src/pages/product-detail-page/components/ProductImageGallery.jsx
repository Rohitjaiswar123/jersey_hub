import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProductImageGallery = ({ images, productName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-surface rounded-lg overflow-hidden">
        <div className="aspect-square relative">
          <Image
            src={images[currentImageIndex]}
            alt={`${productName} - View ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover transition-transform duration-300 cursor-zoom-in ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            onClick={toggleZoom}
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all duration-200 shadow-md"
            style={{ width: '40px', height: '40px' }}
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all duration-200 shadow-md"
            style={{ width: '40px', height: '40px' }}
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-background/80 rounded-full p-2">
            <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={16} />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-background/80 rounded-full px-3 py-1 text-sm font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentImageIndex
                ? 'border-primary shadow-md'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* View Options */}
      <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
          <Icon name="RotateCcw" size={16} />
          <span>360° View</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
          <Icon name="Maximize" size={16} />
          <span>Full Screen</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
          <Icon name="Share2" size={16} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default ProductImageGallery;