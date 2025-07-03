import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AuthenticationDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState('certificate');

  const authenticationFeatures = [
    {
      icon: 'Shield',
      title: 'Holographic Authentication',
      description: 'Unique holographic seal that cannot be replicated'
    },
    {
      icon: 'Fingerprint',
      title: 'Digital Verification',
      description: 'QR code linking to our authentication database'
    },
    {
      icon: 'Award',
      title: 'Expert Verification',
      description: 'Authenticated by certified sports memorabilia experts'
    },
    {
      icon: 'Lock',
      title: 'Blockchain Record',
      description: 'Permanent record stored on blockchain technology'
    }
  ];

  const certificationDetails = {
    certificateNumber: 'JH-2024-NBA-001847',
    authenticatedBy: 'Michael Rodriguez, Senior Authenticator',
    authenticatedDate: '2024-01-15',
    manufacturer: 'Nike Official',
    season: '2023-24 NBA Season',
    playerWorn: false,
    gameUsed: false
  };

  const tabs = [
    { id: 'certificate', label: 'Certificate', icon: 'FileText' },
    { id: 'process', label: 'Process', icon: 'Settings' },
    { id: 'team', label: 'Our Team', icon: 'Users' }
  ];

  return (
    <div className="bg-background border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-success/10 p-2 rounded-lg">
          <Icon name="ShieldCheck" size={24} className="text-success" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Authentication Guarantee</h3>
          <p className="text-sm text-text-secondary">
            Every jersey comes with our comprehensive authenticity verification
          </p>
        </div>
      </div>

      {/* Authentication Features Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {authenticationFeatures.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3 p-4 bg-surface rounded-lg">
            <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
              <Icon name={feature.icon} size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-primary mb-1">{feature.title}</h4>
              <p className="text-sm text-text-secondary">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-surface p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex-1 justify-center ${
              activeTab === tab.id
                ? 'bg-background text-primary shadow-sm'
                : 'text-text-secondary hover:text-primary'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {activeTab === 'certificate' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-primary">Certificate of Authenticity</h4>
                <div className="authentication-badge">
                  <Icon name="Verified" size={14} className="mr-1" />
                  Verified
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                      Certificate Number
                    </label>
                    <p className="font-mono text-sm text-primary">{certificationDetails.certificateNumber}</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                      Authenticated By
                    </label>
                    <p className="text-sm text-primary">{certificationDetails.authenticatedBy}</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                      Authentication Date
                    </label>
                    <p className="text-sm text-primary">{certificationDetails.authenticatedDate}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                      Manufacturer
                    </label>
                    <p className="text-sm text-primary">{certificationDetails.manufacturer}</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                      Season
                    </label>
                    <p className="text-sm text-primary">{certificationDetails.season}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={certificationDetails.playerWorn ? "Check" : "X"} 
                        size={16} 
                        className={certificationDetails.playerWorn ? "text-success" : "text-text-tertiary"} 
                      />
                      <span className="text-sm">Player Worn</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={certificationDetails.gameUsed ? "Check" : "X"} 
                        size={16} 
                        className={certificationDetails.gameUsed ? "text-success" : "text-text-tertiary"} 
                      />
                      <span className="text-sm">Game Used</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" size={20} className="text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-medium text-warning mb-1">Important Notice</h5>
                  <p className="text-sm text-warning/80">
                    This certificate is unique to this specific jersey. Any attempt to reproduce or transfer 
                    this certificate to another item is strictly prohibited and may result in legal action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-primary">Our Authentication Process</h4>
            
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: 'Initial Inspection',
                  description: 'Physical examination of materials, stitching, and construction quality',
                  duration: '2-3 hours'
                },
                {
                  step: 2,
                  title: 'Documentation Review',
                  description: 'Verification of manufacturer records and official documentation',
                  duration: '1-2 days'
                },
                {
                  step: 3,
                  title: 'Expert Analysis',
                  description: 'Detailed analysis by certified sports memorabilia experts',
                  duration: '3-5 days'
                },
                {
                  step: 4,
                  title: 'Digital Registration',
                  description: 'Creation of digital certificate and blockchain record',
                  duration: '1 day'
                }
              ].map((step) => (
                <div key={step.step} className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-primary mb-1">{step.title}</h5>
                    <p className="text-sm text-text-secondary mb-2">{step.description}</p>
                    <span className="text-xs text-text-tertiary">Duration: {step.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-primary">Authentication Team</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: 'Michael Rodriguez',
                  role: 'Senior Authenticator',
                  experience: '15+ years',
                  specialization: 'NBA & NFL Jerseys',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
                },
                {
                  name: 'Sarah Chen',
                  role: 'Authentication Specialist',
                  experience: '12+ years',
                  specialization: 'MLB & NHL Jerseys',
                  image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
                },
                {
                  name: 'David Thompson',
                  role: 'Vintage Specialist',
                  experience: '20+ years',
                  specialization: 'Vintage & Rare Jerseys',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
                },
                {
                  name: 'Lisa Martinez',
                  role: 'Quality Assurance',
                  experience: '10+ years',
                  specialization: 'Process & Documentation',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
                }
              ].map((member, index) => (
                <div key={index} className="bg-surface p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-medium text-primary">{member.name}</h5>
                      <p className="text-sm text-text-secondary">{member.role}</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-tertiary">Experience:</span>
                      <span className="text-primary">{member.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-tertiary">Specialization:</span>
                      <span className="text-primary">{member.specialization}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthenticationDetails;