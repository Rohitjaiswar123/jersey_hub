import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ product }) => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [showPhotosOnly, setShowPhotosOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: 1,
      user: {
        name: 'Marcus Johnson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      rating: 5,
      date: '2024-01-20',
      title: 'Perfect authentic jersey!',
      content: `Absolutely love this jersey! The quality is outstanding and you can tell it's authentic. The stitching is perfect, colors are vibrant, and the fit is exactly as expected. Shipping was fast and packaging was excellent.`,helpful: 24,size: 'Large',fit: 'Perfect',
      photos: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop','https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
      ]
    },
    {
      id: 2,
      user: {
        name: 'Sarah Williams',avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      rating: 4,
      date: '2024-01-18',title: 'Great quality, runs slightly large',content: `Really happy with this purchase. The jersey quality is excellent and the authentication process gives me confidence. Only minor issue is that it runs slightly larger than expected, but still looks great.`,helpful: 18,size: 'Medium',fit: 'Slightly Large',
      photos: []
    },
    {
      id: 3,
      user: {
        name: 'David Chen',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      rating: 5,
      date: '2024-01-15',title: 'Exceeded expectations',content: `This jersey is even better than I expected. The material feels premium, the colors are exactly like the official team jerseys, and the customization looks professional. Will definitely order again.`,helpful: 31,size: 'Large',fit: 'Perfect',
      photos: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
      ]
    },
    {
      id: 4,
      user: {
        name: 'Jennifer Lopez',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      rating: 5,
      date: '2024-01-12',title: 'Perfect gift for my husband',
      content: `Bought this as a surprise for my husband and he absolutely loves it! The quality is amazing and the authentication certificate was a nice touch. Customer service was also very helpful.`,
      helpful: 15,
      size: 'X-Large',fit: 'Perfect',
      photos: []
    }
  ];

  const ratingDistribution = [
    { stars: 5, count: 156, percentage: 78 },
    { stars: 4, count: 32, percentage: 16 },
    { stars: 3, count: 8, percentage: 4 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 1, percentage: 0 }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedRating !== 'all' && review.rating !== parseInt(selectedRating)) {
      return false;
    }
    if (showPhotosOnly && review.photos.length === 0) {
      return false;
    }
    return true;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-background border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary">Customer Reviews</h3>
        <Button variant="outline">
          <Icon name="Edit" size={16} className="mr-2" />
          Write Review
        </Button>
      </div>

      {/* Rating Summary */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold text-primary">{product.rating}</div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className={i < Math.floor(product.rating) ? 'text-warning fill-current' : 'text-border'}
                  />
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                Based on {product.reviewCount} reviews
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-12">
                  <span className="text-sm">{rating.stars}</span>
                  <Icon name="Star" size={12} className="text-warning fill-current" />
                </div>
                <div className="flex-1 bg-surface rounded-full h-2">
                  <div
                    className="bg-warning rounded-full h-2 transition-all duration-300"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-text-secondary w-8">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-primary">Review Highlights</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
              <span className="text-sm">Quality</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-border rounded-full h-2">
                  <div className="bg-success rounded-full h-2" style={{ width: '92%' }} />
                </div>
                <span className="text-sm font-medium">4.6</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
              <span className="text-sm">Fit</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-border rounded-full h-2">
                  <div className="bg-success rounded-full h-2" style={{ width: '88%' }} />
                </div>
                <span className="text-sm font-medium">4.4</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
              <span className="text-sm">Value</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-border rounded-full h-2">
                  <div className="bg-success rounded-full h-2" style={{ width: '85%' }} />
                </div>
                <span className="text-sm font-medium">4.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-surface rounded-lg">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-primary">Filter by rating:</label>
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="text-sm border border-border rounded px-2 py-1 bg-background"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showPhotosOnly}
            onChange={(e) => setShowPhotosOnly(e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-sm">Photos only</span>
        </label>

        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-primary">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-border rounded px-2 py-1 bg-background"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
            <div className="flex items-start space-x-4">
              <Image
                src={review.user.avatar}
                alt={review.user.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h5 className="font-medium text-primary">{review.user.name}</h5>
                  {review.user.verified && (
                    <div className="flex items-center space-x-1 text-xs text-success">
                      <Icon name="ShieldCheck" size={14} />
                      <span>Verified Purchase</span>
                    </div>
                  )}
                  <span className="text-sm text-text-tertiary">{formatDate(review.date)}</span>
                </div>

                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < review.rating ? 'text-warning fill-current' : 'text-border'}
                    />
                  ))}
                </div>

                <h6 className="font-medium text-primary mb-2">{review.title}</h6>
                <p className="text-sm text-text-secondary mb-3">{review.content}</p>

                <div className="flex items-center space-x-4 mb-3 text-xs text-text-tertiary">
                  <span>Size: {review.size}</span>
                  <span>Fit: {review.fit}</span>
                </div>

                {review.photos.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review.photos.map((photo, index) => (
                      <Image
                        key={index}
                        src={photo}
                        alt={`Review photo ${index + 1}`}
                        className="w-16 h-16 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-primary transition-colors">
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default CustomerReviews;