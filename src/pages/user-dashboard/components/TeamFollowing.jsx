import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamFollowing = ({ followedTeams, teamNews, onUnfollowTeam }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [newsFilter, setNewsFilter] = useState('all');

  const filteredNews = teamNews.filter(news => {
    if (newsFilter === 'all') return true;
    return news.teamId === newsFilter;
  });

  const getNewsTypeIcon = (type) => {
    switch (type) {
      case 'merchandise': return 'ShoppingBag';
      case 'game': return 'Calendar';
      case 'player': return 'User';
      case 'announcement': return 'Megaphone';
      default: return 'Bell';
    }
  };

  const getNewsTypeColor = (type) => {
    switch (type) {
      case 'merchandise': return 'text-accent bg-accent-50';
      case 'game': return 'text-primary bg-primary-50';
      case 'player': return 'text-success bg-success-50';
      case 'announcement': return 'text-warning bg-warning-50';
      default: return 'text-text-secondary bg-surface';
    }
  };

  return (
    <div className="bg-background rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Team Following</h2>
        <Button variant="outline" iconName="Plus" iconPosition="left">
          Follow More Teams
        </Button>
      </div>

      {/* Followed Teams */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-4">My Teams ({followedTeams.length})</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {followedTeams.map((team) => (
            <div key={team.id} className="relative group">
              <div className="bg-surface rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <Image
                  src={team.logo}
                  alt={team.name}
                  className="w-12 h-12 object-contain mx-auto mb-2"
                />
                <h4 className="text-sm font-medium text-text-primary truncate">{team.name}</h4>
                <p className="text-xs text-text-secondary">{team.league}</p>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Icon name="Bell" size={12} className="text-primary" />
                  <span className="text-xs text-text-secondary">{team.notificationCount} updates</span>
                </div>
              </div>
              
              {/* Unfollow button on hover */}
              <button
                onClick={() => onUnfollowTeam(team.id)}
                className="absolute top-1 right-1 bg-error text-error-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Icon name="X" size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Team News & Updates */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary mb-2 sm:mb-0">Latest Updates</h3>
          <select
            value={newsFilter}
            onChange={(e) => setNewsFilter(e.target.value)}
            className="text-sm border border-border rounded-md px-3 py-2 bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Teams</option>
            {followedTeams.map((team) => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredNews.map((news) => {
            const team = followedTeams.find(t => t.id === news.teamId);
            return (
              <div key={news.id} className="border border-border rounded-lg p-4 hover:bg-surface-hover transition-colors">
                <div className="flex items-start space-x-4">
                  <Image
                    src={team?.logo}
                    alt={team?.name}
                    className="w-10 h-10 object-contain flex-shrink-0"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getNewsTypeColor(news.type)}`}>
                        <Icon name={getNewsTypeIcon(news.type)} size={12} className="inline mr-1" />
                        {news.type.charAt(0).toUpperCase() + news.type.slice(1)}
                      </span>
                      <span className="text-xs text-text-tertiary">{news.timestamp}</span>
                    </div>
                    
                    <h4 className="font-semibold text-text-primary mb-1">{news.title}</h4>
                    <p className="text-sm text-text-secondary mb-2">{news.description}</p>
                    
                    {news.actionButton && (
                      <Button variant="outline" size="sm" iconName={news.actionButton.icon}>
                        {news.actionButton.text}
                      </Button>
                    )}
                  </div>
                  
                  {news.image && (
                    <Image
                      src={news.image}
                      alt={news.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamFollowing;