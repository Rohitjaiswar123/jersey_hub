import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WelcomeSection = ({ user, favoriteTeams, recentOrders }) => {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <div className="relative">
            <Image
              src={user.avatar}
              alt={`${user.name}'s profile`}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
            />
            <div className="absolute -bottom-1 -right-1 bg-success text-success-foreground rounded-full p-1">
              <Icon name="Check" size={12} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Welcome back, {user.name}!</h1>
            <p className="text-text-secondary">Jersey Hub Member since {user.memberSince}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {favoriteTeams.slice(0, 3).map((team) => (
            <div key={team.id} className="flex items-center space-x-2 bg-background rounded-full px-3 py-1 border border-border">
              <Image
                src={team.logo}
                alt={team.name}
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm font-medium text-text-primary">{team.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Package" size={20} className="text-primary" />
            <span className="font-medium text-text-primary">Recent Orders</span>
          </div>
          <p className="text-2xl font-bold text-primary">{recentOrders.length}</p>
          <p className="text-sm text-text-secondary">Last 30 days</p>
        </div>
        
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Star" size={20} className="text-warning" />
            <span className="font-medium text-text-primary">Loyalty Points</span>
          </div>
          <p className="text-2xl font-bold text-warning">{user.loyaltyPoints}</p>
          <p className="text-sm text-text-secondary">Gold Member</p>
        </div>
        
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Heart" size={20} className="text-accent" />
            <span className="font-medium text-text-primary">Wishlist Items</span>
          </div>
          <p className="text-2xl font-bold text-accent">{user.wishlistCount}</p>
          <p className="text-sm text-text-secondary">2 on sale now</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;