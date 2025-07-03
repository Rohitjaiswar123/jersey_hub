import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamHero = ({ selectedTeam, onTeamChange }) => {
  const teams = [
    {
      id: 'lakers',
      name: 'Los Angeles Lakers',
      sport: 'NBA',
      logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop',
      colors: { primary: '#552583', secondary: '#FDB927', accent: '#000000' },
      championships: 17,
      founded: 1947,
      arena: 'Crypto.com Arena',
      heroImage: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=1200&h=600&fit=crop',
      recentNews: 'Lakers secure playoff spot with dominant 118-102 victory',
      nextGame: { opponent: 'Golden State Warriors', date: '2024-03-15', time: '7:30 PM' },
      record: { wins: 45, losses: 32 }
    },
    {
      id: 'warriors',
      name: 'Golden State Warriors',
      sport: 'NBA',
      logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop',
      colors: { primary: '#1D428A', secondary: '#FFC72C', accent: '#FFFFFF' },
      championships: 7,
      founded: 1946,
      arena: 'Chase Center',
      heroImage: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=1200&h=600&fit=crop',
      recentNews: 'Warriors extend winning streak to 8 games with stellar performance',
      nextGame: { opponent: 'Los Angeles Lakers', date: '2024-03-15', time: '7:30 PM' },
      record: { wins: 42, losses: 35 }
    },
    {
      id: 'celtics',
      name: 'Boston Celtics',
      sport: 'NBA',
      logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop',
      colors: { primary: '#007A33', secondary: '#BA9653', accent: '#FFFFFF' },
      championships: 18,
      founded: 1946,
      arena: 'TD Garden',
      heroImage: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=1200&h=600&fit=crop',
      recentNews: 'Celtics clinch Eastern Conference top seed with commanding win',
      nextGame: { opponent: 'Miami Heat', date: '2024-03-16', time: '8:00 PM' },
      record: { wins: 58, losses: 19 }
    }
  ];

  const team = teams.find(t => t.id === selectedTeam) || teams[0];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={team.heroImage}
          alt={`${team.name} arena`}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Team Selector */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {teams.map((t) => (
              <Button
                key={t.id}
                variant={selectedTeam === t.id ? "primary" : "ghost"}
                onClick={() => onTeamChange(t.id)}
                className={`text-sm ${selectedTeam === t.id ? '' : 'text-white hover:bg-white/10'}`}
              >
                {t.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Team Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white p-2">
                  <Image
                    src={team.logo}
                    alt={`${team.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {team.name}
                  </h1>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <span className="flex items-center">
                      <Icon name="Trophy" size={16} className="mr-1" />
                      {team.championships} Championships
                    </span>
                    <span className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-1" />
                      Est. {team.founded}
                    </span>
                  </div>
                </div>
              </div>

              {/* Team Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">
                    {team.record.wins}-{team.record.losses}
                  </div>
                  <div className="text-sm text-gray-300">Season Record</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{team.arena}</div>
                  <div className="text-sm text-gray-300">Home Arena</div>
                </div>
              </div>

              {/* Recent News */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="Newspaper" size={20} className="text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Latest News</h3>
                    <p className="text-gray-300 text-sm">{team.recentNews}</p>
                  </div>
                </div>
              </div>

              {/* Next Game */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white mb-1">Next Game</h3>
                    <p className="text-gray-300 text-sm">vs {team.nextGame.opponent}</p>
                    <p className="text-gray-400 text-xs">
                      {team.nextGame.date} at {team.nextGame.time}
                    </p>
                  </div>
                  <Button variant="primary" className="shrink-0">
                    <Icon name="Ticket" size={16} className="mr-2" />
                    Get Tickets
                  </Button>
                </div>
              </div>
            </div>

            {/* Championship Banners */}
            <div className="hidden lg:block">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-6">Championship Legacy</h2>
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: Math.min(team.championships, 9) }, (_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg p-3 text-center"
                    >
                      <Icon name="Trophy" size={24} className="mx-auto mb-2 text-yellow-900" />
                      <div className="text-xs font-bold text-yellow-900">
                        {2024 - i}
                      </div>
                    </div>
                  ))}
                  {team.championships > 9 && (
                    <div className="bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-white">
                        +{team.championships - 9}
                      </div>
                      <div className="text-xs text-gray-200">More</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;