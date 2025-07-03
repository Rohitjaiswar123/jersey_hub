import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FanCommunity = ({ selectedTeam }) => {
  const [activeSection, setActiveSection] = useState('discussions');

  const communityData = {
    discussions: [
      {
        id: 1,
        title: 'Best jersey combinations for the upcoming season?',
        author: 'LakersFan23',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        replies: 45,
        likes: 128,
        timeAgo: '2 hours ago',
        category: 'General Discussion',
        isHot: true
      },
      {
        id: 2,
        title: 'Vintage Magic Johnson jersey authentication help needed',
        author: 'VintageCollector',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        replies: 23,
        likes: 67,
        timeAgo: '4 hours ago',
        category: 'Authentication',
        isHot: false
      },
      {
        id: 3,
        title: 'Game day outfit inspiration - what are you wearing?',
        author: 'StyleFan',
        avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
        replies: 89,
        likes: 234,
        timeAgo: '6 hours ago',
        category: 'Style & Fashion',
        isHot: true
      },
      {
        id: 4,
        title: 'Trading my Kobe #8 for #24 - anyone interested?',
        author: 'JerseyTrader',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
        replies: 12,
        likes: 34,
        timeAgo: '8 hours ago',
        category: 'Trading',
        isHot: false
      }
    ],
    collections: [
      {
        id: 1,
        owner: 'MambaForever',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        title: 'Complete Kobe Bryant Collection',
        description: 'Every Kobe jersey from rookie year to retirement',
        jerseyCount: 24,
        likes: 456,
        featured: true,
        coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        badges: ['Verified Collector', 'Complete Set']
      },
      {
        id: 2,
        owner: 'ShowtimeFan',
        avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
        title: '1980s Lakers Dynasty',
        description: 'Magic, Kareem, and the Showtime era jerseys',
        jerseyCount: 18,
        likes: 289,
        featured: false,
        coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        badges: ['Vintage Expert']
      },
      {
        id: 3,
        owner: 'ChampionshipHunter',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        title: 'Championship Jerseys Only',
        description: 'Jerseys from every Lakers championship season',
        jerseyCount: 17,
        likes: 378,
        featured: true,
        coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        badges: ['Championship Collector', 'Rare Finds']
      }
    ],
    userContent: [
      {
        id: 1,
        type: 'photo',
        user: 'GameDayReady',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        content: 'Ready for tonight\'s game! #LakeShow #JerseyHub',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
        likes: 234,
        comments: 45,
        timeAgo: '1 hour ago',
        hashtags: ['#LakeShow', '#JerseyHub', '#GameDay']
      },
      {
        id: 2,
        type: 'video',
        user: 'JerseyReviewer',
        avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
        content: 'Unboxing my new LeBron jersey from Jersey Hub! Quality is amazing 🔥',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
        likes: 567,
        comments: 89,
        timeAgo: '3 hours ago',
        hashtags: ['#Unboxing', '#LeBron', '#JerseyHub']
      },
      {
        id: 3,
        type: 'photo',
        user: 'VintageVibes',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        content: 'Found this gem at a thrift store! Authentic 1985 Magic Johnson jersey ✨',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
        likes: 445,
        comments: 67,
        timeAgo: '5 hours ago',
        hashtags: ['#Vintage', '#ThriftFind', '#Magic']
      }
    ]
  };

  const sections = [
    { id: 'discussions', name: 'Discussions', icon: 'MessageCircle', count: communityData.discussions.length },
    { id: 'collections', name: 'Collections', icon: 'Grid3X3', count: communityData.collections.length },
    { id: 'user-content', name: 'Fan Posts', icon: 'Camera', count: communityData.userContent.length }
  ];

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Fan Community
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Connect with fellow fans, share your jersey collections, and join discussions about your favorite team. Be part of the passionate community that makes this sport special.
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "primary" : "ghost"}
              onClick={() => setActiveSection(section.id)}
              iconName={section.icon}
              iconPosition="left"
              className="text-sm"
            >
              {section.name}
              <span className="ml-2 bg-white/20 text-xs px-2 py-1 rounded-full">
                {section.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="min-h-[500px]">
          {/* Discussions */}
          {activeSection === 'discussions' && (
            <div className="space-y-4">
              {communityData.discussions.map((discussion) => (
                <div
                  key={discussion.id}
                  className="bg-surface rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-text-primary hover:text-primary cursor-pointer">
                          {discussion.title}
                        </h3>
                        {discussion.isHot && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            Hot
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                        <span>by {discussion.author}</span>
                        <span>{discussion.timeAgo}</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {discussion.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={16} className="text-gray-400" />
                          <span className="text-sm text-text-secondary">{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={16} className="text-red-400" />
                          <span className="text-sm text-text-secondary">{discussion.likes} likes</span>
                        </div>
                        <Button variant="ghost" className="text-sm p-0 h-auto">
                          Join Discussion
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center pt-6">
                <Button variant="outline">
                  Load More Discussions
                  <Icon name="ChevronDown" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Collections */}
          {activeSection === 'collections' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityData.collections.map((collection) => (
                <div
                  key={collection.id}
                  className={`bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                    collection.featured ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={collection.coverImage}
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                    {collection.featured && (
                      <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                      {collection.jerseyCount} jerseys
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={collection.avatar}
                          alt={collection.owner}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{collection.title}</h3>
                        <p className="text-sm text-text-secondary">by {collection.owner}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                      {collection.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {collection.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={16} className="text-red-400" />
                        <span className="text-sm text-text-secondary">{collection.likes}</span>
                      </div>
                      <Button variant="outline" className="text-sm">
                        View Collection
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* User Content */}
          {activeSection === 'user-content' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityData.userContent.map((post) => (
                <div
                  key={post.id}
                  className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={post.type === 'video' ? post.thumbnail : post.image}
                      alt="User content"
                      className="w-full h-full object-cover"
                    />
                    {post.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-3">
                          <Icon name="Play" size={24} className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.avatar}
                          alt={post.user}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary text-sm">{post.user}</p>
                        <p className="text-text-secondary text-xs">{post.timeAgo}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                      {post.content}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.hashtags.map((hashtag, index) => (
                        <span
                          key={index}
                          className="text-blue-600 text-xs hover:underline cursor-pointer"
                        >
                          {hashtag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={16} className="text-red-400" />
                          <span className="text-sm text-text-secondary">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={16} className="text-gray-400" />
                          <span className="text-sm text-text-secondary">{post.comments}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="text-sm p-0 h-auto">
                        <Icon name="Share" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Join Our Growing Community</h3>
            <p className="text-white/80">Connect with passionate fans from around the world</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-white/80 text-sm">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1.2K</div>
              <div className="text-white/80 text-sm">Collections Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5.8K</div>
              <div className="text-white/80 text-sm">Discussions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15K+</div>
              <div className="text-white/80 text-sm">Photos Shared</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Join Community
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanCommunity;