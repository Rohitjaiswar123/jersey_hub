import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessStories = ({ currentLanguage }) => {
  const [activeStory, setActiveStory] = useState(0);

  const translations = {
    en: {
      title: "Authentication Success Stories",
      subtitle: "Real Customers, Real Discoveries",
      readMore: "Read Full Story",
      nextStory: "Next Story",
      prevStory: "Previous Story",
      verified: "Verified Authentic",
      saved: "Saved from Counterfeit",
      discovered: "Rare Discovery"
    },
    es: {
      title: "Historias de Éxito de Autenticación",
      subtitle: "Clientes Reales, Descubrimientos Reales",
      readMore: "Leer Historia Completa",
      nextStory: "Siguiente Historia",
      prevStory: "Historia Anterior",
      verified: "Verificado Auténtico",
      saved: "Salvado de Falsificación",
      discovered: "Descubrimiento Raro"
    }
  };

  const t = translations[currentLanguage];

  const successStories = [
    {
      id: 1,
      customerName: "Michael Thompson",
      location: "Chicago, IL",
      jerseyType: "1985 Michael Jordan Rookie Jersey",
      storyType: "discovered",
      value: "$45,000",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      jerseyImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      story: `I inherited this jersey from my grandfather and always wondered if it was authentic. Jersey Hub's authentication team not only confirmed its authenticity but discovered it was a rare rookie season jersey worth significantly more than I imagined.`,
      fullStory: `Michael brought us a jersey that had been in his family for decades. His grandfather claimed to have purchased it directly from the Bulls' team store in 1985, but Michael was skeptical. Our authentication team conducted a thorough analysis, examining the fabric composition, stitching patterns, and logo placement. What we discovered was remarkable - not only was the jersey authentic, but it was from Jordan's actual rookie season, making it extremely valuable. The jersey showed proper aging patterns, correct manufacturer tags from that era, and even had a small repair that matched team records. Michael was amazed to learn his family heirloom was worth $45,000.`,
      authenticationFindings: [
        "Correct 1985 fabric composition",
        "Period-accurate stitching techniques",
        "Authentic Champion manufacturer tags",
        "Proper aging and wear patterns"
      ]
    },
    {
      id: 2,
      customerName: "Sarah Rodriguez",
      location: "Miami, FL",
      jerseyType: "Tom Brady Super Bowl Jersey",
      storyType: "saved",
      value: "$2,500",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      jerseyImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      story: `I was about to purchase what I thought was an authentic Tom Brady Super Bowl jersey from an online seller for $2,500. Jersey Hub's pre-purchase authentication service saved me from a costly mistake by identifying it as a high-quality counterfeit.`,
      fullStory: `Sarah contacted us before making a significant purchase from an online marketplace. The seller had convincing photos and claimed the jersey was authentic with a certificate of authenticity. Our team requested additional photos and immediately spotted several red flags. The stitching pattern was incorrect for that specific Super Bowl year, the NFL shield was slightly off-center, and the holographic tag was a known counterfeit version. We provided Sarah with a detailed report showing the differences between authentic and counterfeit versions, saving her $2,500 and helping her find a genuine jersey through our network.`,
      authenticationFindings: [
        "Incorrect stitching pattern for the year",
        "Off-center NFL shield placement",
        "Counterfeit holographic security tag",
        "Wrong fabric weight for authentic jerseys"
      ]
    },
    {
      id: 3,
      customerName: "David Chen",
      location: "Los Angeles, CA",
      jerseyType: "Kobe Bryant Signed Jersey",
      storyType: "verified",
      value: "$8,500",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      jerseyImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      story: `I purchased a signed Kobe Bryant jersey but was concerned about the signature's authenticity. Jersey Hub's comprehensive authentication confirmed both the jersey and signature were genuine, giving me complete confidence in my investment.`,
      fullStory: `David had purchased a signed Kobe Bryant jersey from a reputable dealer but wanted additional verification before adding it to his collection. Our authentication process included both jersey verification and signature analysis. We examined the jersey's construction, confirming it was an authentic Nike jersey from the correct era. For the signature, our handwriting experts compared it against known authentic Kobe signatures, analyzing pen pressure, letter formation, and flow. We also verified the signing event through our database of authenticated signings. The comprehensive authentication gave David complete confidence in his $8,500 investment.`,
      authenticationFindings: [
        "Authentic Nike jersey construction",
        "Verified signature characteristics",
        "Confirmed signing event documentation",
        "Proper authentication chain of custody"
      ]
    },
    {
      id: 4,
      customerName: "Jennifer Martinez",
      location: "Dallas, TX",
      jerseyType: "Vintage Cowboys Jersey",
      storyType: "discovered",
      value: "$12,000",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      jerseyImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      story: `What I thought was a regular vintage Cowboys jersey turned out to be a rare game-worn jersey from the 1970s. Jersey Hub's authentication revealed its true value and historical significance.`,
      fullStory: `Jennifer brought us what appeared to be a standard vintage Cowboys jersey she found at an estate sale. However, our detailed examination revealed several indicators that this was actually a game-worn jersey from the 1970s. The jersey showed specific wear patterns consistent with game use, had team-issued tags that were only used for player jerseys, and even contained traces of the specific detergent used by the team's equipment staff. Further research revealed it likely belonged to a backup player from the Cowboys' Super Bowl era. This discovery transformed a $50 estate sale find into a $12,000 piece of NFL history.`,
      authenticationFindings: [
        "Game-worn wear patterns",
        "Team-issued player tags",
        "Period-correct equipment manager markings",
        "Historical team detergent residue"
      ]
    }
  ];

  const currentStory = successStories[activeStory];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const getStoryTypeColor = (type) => {
    switch (type) {
      case 'discovered': return 'success';
      case 'saved': return 'warning';
      case 'verified': return 'primary';
      default: return 'secondary';
    }
  };

  const getStoryTypeLabel = (type) => {
    switch (type) {
      case 'discovered': return t.discovered;
      case 'saved': return t.saved;
      case 'verified': return t.verified;
      default: return '';
    }
  };

  return (
    <div className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-background rounded-full p-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStory ? 'bg-primary' : 'bg-border hover:bg-border-dark'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Current Story */}
        <div className="card max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Story Content */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={currentStory.image}
                    alt={currentStory.customerName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">
                    {currentStory.customerName}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {currentStory.location}
                  </p>
                  <div className={`inline-flex items-center space-x-1 mt-2 px-3 py-1 rounded-full text-xs font-medium bg-${getStoryTypeColor(currentStory.storyType)} text-${getStoryTypeColor(currentStory.storyType)}-foreground`}>
                    <Icon name="Award" size={12} />
                    <span>{getStoryTypeLabel(currentStory.storyType)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {currentStory.jerseyType}
                  </h4>
                  <div className="text-2xl font-bold text-accent">
                    {currentStory.value}
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  {currentStory.story}
                </p>

                <div className="space-y-3">
                  <h5 className="font-semibold text-primary">Authentication Findings:</h5>
                  {currentStory.authenticationFindings.map((finding, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{finding}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" iconName="BookOpen" iconPosition="left">
                  {t.readMore}
                </Button>
              </div>
            </div>

            {/* Jersey Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src={currentStory.jerseyImage}
                  alt={currentStory.jerseyType}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <div className="text-sm text-text-secondary mb-2">Authenticated Jersey</div>
                <div className="text-lg font-semibold text-primary">
                  {currentStory.jerseyType}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center px-8 pb-8 border-t border-border pt-6">
            <Button
              variant="outline"
              iconName="ArrowLeft"
              iconPosition="left"
              onClick={prevStory}
            >
              {t.prevStory}
            </Button>

            <div className="text-sm text-text-secondary">
              {activeStory + 1} of {successStories.length}
            </div>

            <Button
              variant="primary"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={nextStory}
            >
              {t.nextStory}
            </Button>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">$2.3M+</div>
            <div className="text-sm text-text-secondary">Total Value Authenticated</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
            <div className="text-sm text-text-secondary">Jerseys Authenticated</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">$850K+</div>
            <div className="text-sm text-text-secondary">Saved from Counterfeits</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-text-secondary">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;