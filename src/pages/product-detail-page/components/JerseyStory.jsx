import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const JerseyStory = ({ product }) => {
  const [activeSection, setActiveSection] = useState('history');

  const sections = [
    { id: 'history', label: 'Jersey History', icon: 'Clock' },
    { id: 'player', label: 'Player Legacy', icon: 'User' },
    { id: 'team', label: 'Team Significance', icon: 'Users' },
    { id: 'design', label: 'Design Details', icon: 'Palette' }
  ];

  const jerseyHistory = {
    introduction: '2023-24 Season',
    designer: 'Nike Basketball Design Team',
    inspiration: `This jersey design pays homage to the team's championship legacy while incorporating modern performance technology. The color scheme represents the city's vibrant energy and the team's unwavering spirit.`,
    significance: `Worn during the team's historic playoff run, this jersey has become synonymous with excellence and determination. Each thread tells a story of dedication, teamwork, and the pursuit of greatness.`,
    technicalSpecs: [
      'Nike Dri-FIT ADV technology for superior moisture management',
      'Lightweight, breathable mesh construction',
      'Heat-applied graphics for authentic team branding',
      'Tailored fit designed for optimal performance and comfort'
    ]
  };

  const playerLegacy = {
    achievements: [
      '6× NBA All-Star',
      '2× NBA Champion',
      'NBA Finals MVP (2023)',
      'Olympic Gold Medalist (2021)'
    ],
    careerHighlights: `Known for clutch performances and leadership on and off the court. This jersey represents the pinnacle of athletic excellence and has been worn during some of the most memorable moments in recent basketball history.`,
    personalStory: `"This jersey means everything to me. It represents not just my individual journey, but the collective effort of an entire organization and fanbase. Every time I put it on, I'm reminded of the responsibility I have to give my absolute best." - Player Quote`,
    stats: {
      pointsPerGame: 28.4,
      assistsPerGame: 7.2,
      reboundsPerGame: 8.1,
      fieldGoalPercentage: 52.3
    }
  };

  const teamSignificance = {
    founded: '1946',
    championships: 17,
    retiredNumbers: 23,
    hallOfFamers: 31,
    teamPhilosophy: `Built on a foundation of excellence, teamwork, and community engagement. This organization has consistently set the standard for professional basketball, both on and off the court.`,
    culturalImpact: `More than just a basketball team, this franchise has become a cultural institution. The jersey represents a connection to generations of fans and a shared identity that transcends the game itself.`,
    communityInvolvement: `Through various charitable initiatives and community programs, the team has invested over $50 million in local communities, making this jersey a symbol of positive change and social responsibility.`
  };

  const designDetails = {
    colorPalette: [
      { name: 'Primary Blue', hex: '#1d428a', meaning: 'Strength and reliability' },
      { name: 'Gold Accent', hex: '#ffc72c', meaning: 'Excellence and achievement' },
      { name: 'White Base', hex: '#ffffff', meaning: 'Purity and new beginnings' }
    ],
    typography: 'Custom team font developed exclusively for this jersey design',
    materials: 'Premium polyester blend with moisture-wicking properties',
    construction: 'Double-stitched seams for durability and professional appearance',
    specialFeatures: [
      'Embroidered team logo with metallic thread accents',
      'Player name and number in official team typography',
      'Hidden ventilation panels for enhanced breathability',
      'Reinforced stress points for extended wear'
    ]
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'history':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Jersey Origins</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Introduced:</span>
                    <span className="font-medium text-primary">{jerseyHistory.introduction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Designer:</span>
                    <span className="font-medium text-primary">{jerseyHistory.designer}</span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary mt-4">{jerseyHistory.inspiration}</p>
              </div>
              
              <div className="bg-surface p-4 rounded-lg">
                <h5 className="font-medium text-primary mb-3">Technical Specifications</h5>
                <ul className="space-y-2">
                  {jerseyHistory.technicalSpecs.map((spec, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h5 className="font-medium text-primary mb-2">Historical Significance</h5>
              <p className="text-sm text-text-secondary">{jerseyHistory.significance}</p>
            </div>
          </div>
        );

      case 'player':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Career Achievements</h4>
                <div className="grid grid-cols-2 gap-3">
                  {playerLegacy.achievements.map((achievement, index) => (
                    <div key={index} className="bg-surface p-3 rounded-lg text-center">
                      <div className="text-sm font-medium text-primary">{achievement}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Season Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Points per Game:</span>
                    <span className="font-bold text-primary">{playerLegacy.stats.pointsPerGame}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Assists per Game:</span>
                    <span className="font-bold text-primary">{playerLegacy.stats.assistsPerGame}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Rebounds per Game:</span>
                    <span className="font-bold text-primary">{playerLegacy.stats.reboundsPerGame}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Field Goal %:</span>
                    <span className="font-bold text-primary">{playerLegacy.stats.fieldGoalPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-primary mb-2">Career Highlights</h5>
                <p className="text-sm text-text-secondary">{playerLegacy.careerHighlights}</p>
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h5 className="font-medium text-accent mb-2">Player's Words</h5>
                <p className="text-sm text-accent/80 italic">{playerLegacy.personalStory}</p>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Team Legacy</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary">{teamSignificance.founded}</div>
                    <div className="text-xs text-text-secondary">Founded</div>
                  </div>
                  <div className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary">{teamSignificance.championships}</div>
                    <div className="text-xs text-text-secondary">Championships</div>
                  </div>
                  <div className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary">{teamSignificance.retiredNumbers}</div>
                    <div className="text-xs text-text-secondary">Retired Numbers</div>
                  </div>
                  <div className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary">{teamSignificance.hallOfFamers}</div>
                    <div className="text-xs text-text-secondary">Hall of Famers</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-primary mb-2">Team Philosophy</h5>
                  <p className="text-sm text-text-secondary">{teamSignificance.teamPhilosophy}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-primary mb-2">Cultural Impact</h5>
                  <p className="text-sm text-text-secondary">{teamSignificance.culturalImpact}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <h5 className="font-medium text-success mb-2">Community Involvement</h5>
              <p className="text-sm text-success/80">{teamSignificance.communityInvolvement}</p>
            </div>
          </div>
        );

      case 'design':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Color Palette</h4>
                <div className="space-y-3">
                  {designDetails.colorPalette.map((color, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-full border border-border"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <div className="font-medium text-primary">{color.name}</div>
                        <div className="text-xs text-text-secondary">{color.meaning}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-primary mb-2">Typography</h5>
                  <p className="text-sm text-text-secondary">{designDetails.typography}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-primary mb-2">Materials</h5>
                  <p className="text-sm text-text-secondary">{designDetails.materials}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-primary mb-2">Construction</h5>
                  <p className="text-sm text-text-secondary">{designDetails.construction}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Special Features</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {designDetails.specialFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                    <Icon name="Sparkles" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-background border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-accent/10 p-2 rounded-lg">
          <Icon name="BookOpen" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Jersey Story</h3>
          <p className="text-sm text-text-secondary">
            Discover the history and significance behind this jersey
          </p>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="flex space-x-1 mb-6 bg-surface p-1 rounded-lg overflow-x-auto">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeSection === section.id
                ? 'bg-background text-primary shadow-sm'
                : 'text-text-secondary hover:text-primary'
            }`}
          >
            <Icon name={section.icon} size={16} />
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {renderContent()}
      </div>

      {/* Share Story */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-primary">Share This Story</h4>
            <p className="text-sm text-text-secondary">
              Spread the legacy and passion behind this jersey
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-surface hover:bg-surface-hover rounded-lg transition-colors">
              <Icon name="Facebook" size={18} className="text-text-secondary" />
            </button>
            <button className="p-2 bg-surface hover:bg-surface-hover rounded-lg transition-colors">
              <Icon name="Twitter" size={18} className="text-text-secondary" />
            </button>
            <button className="p-2 bg-surface hover:bg-surface-hover rounded-lg transition-colors">
              <Icon name="Instagram" size={18} className="text-text-secondary" />
            </button>
            <button className="p-2 bg-surface hover:bg-surface-hover rounded-lg transition-colors">
              <Icon name="Link" size={18} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JerseyStory;