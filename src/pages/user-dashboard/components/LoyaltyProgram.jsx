import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LoyaltyProgram = ({ loyaltyData, rewards, onRedeemReward }) => {
  const { currentTier, points, pointsToNextTier, nextTier, totalSpent, memberSince } = loyaltyData;

  const tiers = [
    { name: 'Bronze', minPoints: 0, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { name: 'Silver', minPoints: 1000, color: 'text-gray-600', bgColor: 'bg-gray-50' },
    { name: 'Gold', minPoints: 2500, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { name: 'Platinum', minPoints: 5000, color: 'text-purple-600', bgColor: 'bg-purple-50' }
  ];

  const currentTierIndex = tiers.findIndex(tier => tier.name === currentTier);
  const progressPercentage = nextTier ? ((points - tiers[currentTierIndex].minPoints) / (tiers[currentTierIndex + 1].minPoints - tiers[currentTierIndex].minPoints)) * 100 : 100;

  const getTierIcon = (tierName) => {
    switch (tierName) {
      case 'Bronze': return 'Award';
      case 'Silver': return 'Medal';
      case 'Gold': return 'Crown';
      case 'Platinum': return 'Gem';
      default: return 'Star';
    }
  };

  return (
    <div className="bg-background rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Loyalty Program</h2>
        <Button variant="outline" iconName="Gift" iconPosition="left">
          Refer Friends
        </Button>
      </div>

      {/* Current Status */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-full ${tiers[currentTierIndex].bgColor}`}>
              <Icon name={getTierIcon(currentTier)} size={24} className={tiers[currentTierIndex].color} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">{currentTier} Member</h3>
              <p className="text-text-secondary">Member since {memberSince}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">{points.toLocaleString()}</p>
            <p className="text-sm text-text-secondary">Total Points</p>
          </div>
        </div>

        {nextTier && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Progress to {nextTier}</span>
              <span className="text-sm text-text-secondary">{pointsToNextTier} points to go</span>
            </div>
            <div className="w-full bg-surface rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Tier Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {tiers.map((tier, index) => (
          <div key={tier.name} className={`border rounded-lg p-4 ${index <= currentTierIndex ? 'border-primary bg-primary-50' : 'border-border bg-surface'}`}>
            <div className="flex items-center space-x-2 mb-3">
              <Icon name={getTierIcon(tier.name)} size={20} className={index <= currentTierIndex ? 'text-primary' : 'text-text-tertiary'} />
              <h4 className={`font-semibold ${index <= currentTierIndex ? 'text-primary' : 'text-text-tertiary'}`}>{tier.name}</h4>
              {index === currentTierIndex && (
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">Current</span>
              )}
            </div>
            <ul className="space-y-1 text-sm">
              <li className={`flex items-center space-x-2 ${index <= currentTierIndex ? 'text-text-primary' : 'text-text-tertiary'}`}>
                <Icon name="Check" size={14} />
                <span>{tier.name === 'Bronze' ? '1x' : tier.name === 'Silver' ? '1.5x' : tier.name === 'Gold' ? '2x' : '3x'} Points</span>
              </li>
              <li className={`flex items-center space-x-2 ${index <= currentTierIndex ? 'text-text-primary' : 'text-text-tertiary'}`}>
                <Icon name="Check" size={14} />
                <span>Free Shipping</span>
              </li>
              {tier.name !== 'Bronze' && (
                <li className={`flex items-center space-x-2 ${index <= currentTierIndex ? 'text-text-primary' : 'text-text-tertiary'}`}>
                  <Icon name="Check" size={14} />
                  <span>Early Access</span>
                </li>
              )}
              {(tier.name === 'Gold' || tier.name === 'Platinum') && (
                <li className={`flex items-center space-x-2 ${index <= currentTierIndex ? 'text-text-primary' : 'text-text-tertiary'}`}>
                  <Icon name="Check" size={14} />
                  <span>Exclusive Releases</span>
                </li>
              )}
              {tier.name === 'Platinum' && (
                <li className={`flex items-center space-x-2 ${index <= currentTierIndex ? 'text-text-primary' : 'text-text-tertiary'}`}>
                  <Icon name="Check" size={14} />
                  <span>Personal Concierge</span>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Available Rewards */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">Available Rewards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rewards.map((reward) => (
            <div key={reward.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-50 rounded-lg">
                    <Icon name={reward.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{reward.title}</h4>
                    <p className="text-sm text-text-secondary">{reward.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{reward.pointsCost}</p>
                  <p className="text-xs text-text-secondary">points</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {reward.tier && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${tiers.find(t => t.name === reward.tier)?.bgColor} ${tiers.find(t => t.name === reward.tier)?.color}`}>
                      {reward.tier}+ Only
                    </span>
                  )}
                  {reward.limited && (
                    <span className="text-xs text-warning font-medium">Limited Time</span>
                  )}
                </div>
                
                <Button
                  variant={points >= reward.pointsCost && (!reward.tier || tiers.findIndex(t => t.name === reward.tier) <= currentTierIndex) ? 'primary' : 'outline'}
                  size="sm"
                  disabled={points < reward.pointsCost || (reward.tier && tiers.findIndex(t => t.name === reward.tier) > currentTierIndex)}
                  onClick={() => onRedeemReward(reward.id)}
                >
                  {points >= reward.pointsCost && (!reward.tier || tiers.findIndex(t => t.name === reward.tier) <= currentTierIndex) ? 'Redeem' : 'Locked'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Points History */}
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Points Activity</h3>
        <div className="space-y-3">
          {loyaltyData.recentActivity?.map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${activity.type === 'earned' ? 'bg-success-50' : 'bg-accent-50'}`}>
                  <Icon 
                    name={activity.type === 'earned' ? 'Plus' : 'Minus'} 
                    size={14} 
                    className={activity.type === 'earned' ? 'text-success' : 'text-accent'} 
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{activity.description}</p>
                  <p className="text-xs text-text-secondary">{activity.date}</p>
                </div>
              </div>
              <span className={`font-semibold ${activity.type === 'earned' ? 'text-success' : 'text-accent'}`}>
                {activity.type === 'earned' ? '+' : '-'}{activity.points}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;