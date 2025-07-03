import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamLegacy = ({ selectedTeam }) => {
  const [activeTab, setActiveTab] = useState('retired-numbers');

  const teamLegacyData = {
    lakers: {
      retiredNumbers: [
        { number: 8, player: 'Kobe Bryant', years: '1996-2016', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop' },
        { number: 24, player: 'Kobe Bryant', years: '2006-2016', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop' },
        { number: 32, player: 'Magic Johnson', years: '1979-1996', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop' },
        { number: 33, player: 'Kareem Abdul-Jabbar', years: '1975-1989', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop' },
        { number: 34, player: 'Shaquille O\'Neal', years: '1996-2004', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop' },
        { number: 44, player: 'Jerry West', years: '1960-1974', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop' }
      ],
      hallOfFame: [
        { 
          name: 'Magic Johnson', 
          position: 'Point Guard', 
          inducted: 2002, 
          achievements: '5× NBA Champion, 3× Finals MVP, 12× All-Star',
          image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop'
        },
        { 
          name: 'Kareem Abdul-Jabbar', 
          position: 'Center', 
          inducted: 1995, 
          achievements: '6× NBA Champion, 2× Finals MVP, 19× All-Star',
          image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop'
        },
        { 
          name: 'Kobe Bryant', 
          position: 'Shooting Guard', 
          inducted: 2020, 
          achievements: '5× NBA Champion, 2× Finals MVP, 18× All-Star',
          image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop'
        },
        { 
          name: 'Shaquille O\'Neal', 
          position: 'Center', 
          inducted: 2016, 
          achievements: '4× NBA Champion, 3× Finals MVP, 15× All-Star',
          image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop'
        }
      ],
      historicalJerseys: [
        {
          era: '1970s-1980s',
          name: 'Showtime Era',
          description: 'The golden age of Lakers basketball with Magic Johnson leading the fast-break offense',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
          price: 249.99,
          available: true
        },
        {
          era: '1990s-2000s',
          name: 'Three-Peat Dynasty',
          description: 'Shaq and Kobe dominated the league with three consecutive championships',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
          price: 229.99,
          available: true
        },
        {
          era: '2008-2010',
          name: 'Back-to-Back Champions',
          description: 'Kobe led the Lakers to two more championships in the modern era',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
          price: 199.99,
          available: false
        },
        {
          era: '2020',
          name: 'Bubble Championship',
          description: 'LeBron and AD brought the championship back to Los Angeles',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
          price: 179.99,
          available: true
        }
      ]
    }
  };

  const teamData = teamLegacyData[selectedTeam] || teamLegacyData.lakers;

  const tabs = [
    { id: 'retired-numbers', name: 'Retired Numbers', icon: 'Hash' },
    { id: 'hall-of-fame', name: 'Hall of Fame', icon: 'Crown' },
    { id: 'historical-jerseys', name: 'Historical Jerseys', icon: 'Clock' }
  ];

  return (
    <div className="bg-surface py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Team Legacy
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore the rich history and legendary players that built this franchise. From retired numbers to Hall of Fame inductees, discover the legacy that continues to inspire.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "primary" : "ghost"}
              onClick={() => setActiveTab(tab.id)}
              iconName={tab.icon}
              iconPosition="left"
              className="text-sm"
            >
              {tab.name}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Retired Numbers */}
          {activeTab === 'retired-numbers' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamData.retiredNumbers.map((player, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                      <Image
                        src={player.image}
                        alt={player.player}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {player.number}
                    </div>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{player.player}</h3>
                  <p className="text-text-secondary text-sm mb-4">{player.years}</p>
                  <Button variant="outline" className="w-full text-sm">
                    <Icon name="ShoppingCart" size={14} className="mr-2" />
                    Shop #{player.number} Jersey
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Hall of Fame */}
          {activeTab === 'hall-of-fame' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamData.hallOfFame.map((player, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-text-primary">{player.name}</h3>
                        <Icon name="Crown" size={16} className="text-yellow-500" />
                      </div>
                      <p className="text-text-secondary text-sm mb-2">
                        {player.position} • Inducted {player.inducted}
                      </p>
                      <p className="text-text-secondary text-sm mb-4">
                        {player.achievements}
                      </p>
                      <Button variant="outline" className="text-sm">
                        <Icon name="ExternalLink" size={14} className="mr-2" />
                        View Legacy Collection
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Historical Jerseys */}
          {activeTab === 'historical-jerseys' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.historicalJerseys.map((jersey, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={jersey.image}
                      alt={jersey.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {jersey.era}
                    </div>
                    {!jersey.available && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold">Sold Out</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-text-primary mb-2">{jersey.name}</h3>
                    <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                      {jersey.description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-text-primary">
                        ${jersey.price}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Icon name="Shield" size={14} className="text-green-500" />
                        <span className="text-xs text-text-secondary">Authentic</span>
                      </div>
                    </div>
                    <Button
                      variant={jersey.available ? "primary" : "ghost"}
                      className="w-full text-sm"
                      disabled={!jersey.available}
                    >
                      {jersey.available ? (
                        <>
                          <Icon name="ShoppingCart" size={14} className="mr-2" />
                          Add to Cart
                        </>
                      ) : (
                        'Notify When Available'
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Legacy Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Legacy by the Numbers</h3>
            <p className="text-white/80">Celebrating decades of excellence and championship tradition</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">17</div>
              <div className="text-white/80 text-sm">Championships</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-white/80 text-sm">Retired Numbers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-white/80 text-sm">Hall of Famers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">75+</div>
              <div className="text-white/80 text-sm">Years of History</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLegacy;