import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WelcomeSection from './components/WelcomeSection';
import OrderHistory from './components/OrderHistory';
import WishlistSection from './components/WishlistSection';
import TeamFollowing from './components/TeamFollowing';
import MyCollection from './components/MyCollection';
import LoyaltyProgram from './components/LoyaltyProgram';
import AccountSettings from './components/AccountSettings';
import Icon from '../../components/AppIcon';


const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock user data
  const userData = {
    id: 1,
    name: "Alex Rodriguez",
    firstName: "Alex",
    lastName: "Rodriguez",
    email: "alex.rodriguez@email.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate sports fan and jersey collector. Been following the Lakers since 2005 and love collecting vintage jerseys from the 80s and 90s.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    memberSince: "March 2020",
    loyaltyPoints: 3250,
    wishlistCount: 12,
    twoFactorEnabled: true,
    addresses: [
      {
        label: "Home",
        street: "123 Main Street",
        city: "Los Angeles",
        state: "CA",
        zip: "90210",
        country: "United States",
        isDefault: true
      },
      {
        label: "Work",
        street: "456 Business Ave",
        city: "Los Angeles",
        state: "CA",
        zip: "90211",
        country: "United States",
        isDefault: false
      }
    ],
    preferences: {
      orderUpdates: true,
      teamNews: true,
      productReleases: true,
      priceDrops: true,
      loyaltyRewards: true
    },
    privacy: {
      profileVisibility: true,
      collectionVisibility: true,
      activityVisibility: false,
      dataSharing: true
    },
    loginActivity: [
      {
        device: "MacBook Pro - Chrome",
        location: "Los Angeles, CA",
        time: "2 hours ago",
        current: true
      },
      {
        device: "iPhone 14 - Safari",
        location: "Los Angeles, CA",
        time: "1 day ago",
        current: false
      }
    ]
  };

  const favoriteTeams = [
    {
      id: 1,
      name: "Lakers",
      league: "NBA",
      logo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=50&h=50&fit=crop",
      notificationCount: 3
    },
    {
      id: 2,
      name: "Dodgers",
      league: "MLB",
      logo: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=50&h=50&fit=crop",
      notificationCount: 1
    },
    {
      id: 3,
      name: "Rams",
      league: "NFL",
      logo: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=50&h=50&fit=crop",
      notificationCount: 2
    }
  ];

  const recentOrders = [
    {
      id: 1,
      orderNumber: "JH-2024-001",
      status: "delivered",
      orderDate: "March 15, 2024",
      total: 189.99,
      items: [
        {
          name: "Lakers LeBron James #23 Jersey",
          image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop",
          size: "L",
          quantity: 1,
          price: 149.99
        },
        {
          name: "Lakers Championship Cap",
          image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=100&h=100&fit=crop",
          size: "One Size",
          quantity: 1,
          price: 39.99
        }
      ],
      shippingAddress: "123 Main Street, Los Angeles, CA 90210",
      shippingMethod: "Standard Shipping",
      trackingNumber: "1Z999AA1234567890",
      estimatedDelivery: "March 18, 2024"
    },
    {
      id: 2,
      orderNumber: "JH-2024-002",
      status: "shipped",
      orderDate: "March 20, 2024",
      total: 299.99,
      items: [
        {
          name: "Vintage Magic Johnson #32 Jersey",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
          size: "XL",
          quantity: 1,
          price: 299.99
        }
      ],
      shippingAddress: "123 Main Street, Los Angeles, CA 90210",
      shippingMethod: "Express Shipping",
      trackingNumber: "1Z999AA1234567891",
      estimatedDelivery: "March 23, 2024"
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Kobe Bryant #24 Retirement Jersey",
      team: "Lakers",
      category: "NBA",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop",
      price: 249.99,
      salePrice: 199.99,
      onSale: true,
      discount: 20,
      rating: 4.9,
      availableSizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      lowStock: false,
      priceDropAlert: true,
      dateAdded: "2024-03-10"
    },
    {
      id: 2,
      name: "Shaquille O\'Neal #34 Throwback Jersey",
      team: "Lakers",
      category: "NBA",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      price: 179.99,
      onSale: false,
      rating: 4.7,
      availableSizes: ["M", "L", "XL"],
      inStock: true,
      lowStock: true,
      priceDropAlert: false,
      dateAdded: "2024-03-08"
    }
  ];

  const teamNews = [
    {
      id: 1,
      teamId: 1,
      type: "merchandise",
      title: "New Lakers City Edition Jersey Released",
      description: "The highly anticipated City Edition jersey featuring the Hollywood theme is now available for pre-order.",
      timestamp: "2 hours ago",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop",
      actionButton: {
        text: "Shop Now",
        icon: "ShoppingBag"
      }
    },
    {
      id: 2,
      teamId: 2,
      type: "game",
      title: "Dodgers vs Giants - Opening Day",
      description: "Don't miss the season opener! Get your Dodgers jersey ready for the big game.",
      timestamp: "1 day ago",
      actionButton: {
        text: "View Schedule",
        icon: "Calendar"
      }
    }
  ];

  const collection = [
    {
      id: 1,
      name: "Magic Johnson #32 Authentic Jersey",
      team: "Lakers",
      year: 1987,
      category: "Vintage",
      size: "L",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      purchasePrice: 150,
      estimatedValue: 450,
      authenticated: true,
      rare: true,
      dateAdded: "2023-12-15"
    },
    {
      id: 2,
      name: "Kobe Bryant #8 Rookie Jersey",
      team: "Lakers",
      year: 1996,
      category: "Rookie",
      size: "M",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop",
      purchasePrice: 200,
      estimatedValue: 800,
      authenticated: true,
      rare: true,
      dateAdded: "2023-11-20"
    },
    {
      id: 3,
      name: "LeBron James #23 Current Jersey",
      team: "Lakers",
      year: 2023,
      category: "Current",
      size: "L",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop",
      purchasePrice: 149.99,
      estimatedValue: 149.99,
      authenticated: true,
      rare: false,
      dateAdded: "2024-01-10"
    }
  ];

  const loyaltyData = {
    currentTier: "Gold",
    points: 3250,
    pointsToNextTier: 1750,
    nextTier: "Platinum",
    totalSpent: 2450,
    memberSince: "March 2020",
    recentActivity: [
      {
        type: "earned",
        description: "Purchase - Lakers LeBron James Jersey",
        points: 150,
        date: "March 15, 2024"
      },
      {
        type: "redeemed",
        description: "Free Shipping Reward",
        points: 100,
        date: "March 10, 2024"
      },
      {
        type: "earned",
        description: "Product Review Bonus",
        points: 25,
        date: "March 8, 2024"
      }
    ]
  };

  const rewards = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Free shipping on your next order",
      pointsCost: 100,
      icon: "Truck",
      tier: null,
      limited: false
    },
    {
      id: 2,
      title: "10% Off Coupon",
      description: "10% discount on any jersey",
      pointsCost: 250,
      icon: "Percent",
      tier: null,
      limited: false
    },
    {
      id: 3,
      title: "Exclusive Jersey Access",
      description: "Early access to limited edition releases",
      pointsCost: 500,
      icon: "Star",
      tier: "Gold",
      limited: true
    },
    {
      id: 4,
      title: "Personal Shopping Session",
      description: "One-on-one consultation with our experts",
      pointsCost: 1000,
      icon: "Users",
      tier: "Platinum",
      limited: false
    }
  ];

  const translations = {
    en: {
      dashboard: "Dashboard",
      overview: "Overview",
      orders: "Orders",
      wishlist: "Wishlist",
      teams: "Teams",
      collection: "Collection",
      loyalty: "Loyalty",
      settings: "Settings",
      welcome: "Welcome to your dashboard"
    },
    es: {
      dashboard: "Panel",
      overview: "Resumen",
      orders: "Pedidos",
      wishlist: "Lista de Deseos",
      teams: "Equipos",
      collection: "Colección",
      loyalty: "Lealtad",
      settings: "Configuración",
      welcome: "Bienvenido a tu panel"
    }
  };

  const t = translations[currentLanguage];

  const sidebarItems = [
    { id: 'overview', name: t.overview, icon: 'LayoutDashboard' },
    { id: 'orders', name: t.orders, icon: 'Package' },
    { id: 'wishlist', name: t.wishlist, icon: 'Heart' },
    { id: 'teams', name: t.teams, icon: 'Users' },
    { id: 'collection', name: t.collection, icon: 'Archive' },
    { id: 'loyalty', name: t.loyalty, icon: 'Award' },
    { id: 'settings', name: t.settings, icon: 'Settings' }
  ];

  const handleRemoveWishlistItem = (itemId) => {
    console.log('Remove wishlist item:', itemId);
  };

  const handleMoveToCart = (itemId) => {
    console.log('Move to cart:', itemId);
  };

  const handleUnfollowTeam = (teamId) => {
    console.log('Unfollow team:', teamId);
  };

  const handleAddJersey = () => {
    console.log('Add jersey to collection');
  };

  const handleEditJersey = (jerseyId) => {
    console.log('Edit jersey:', jerseyId);
  };

  const handleRemoveJersey = (jerseyId) => {
    console.log('Remove jersey:', jerseyId);
  };

  const handleRedeemReward = (rewardId) => {
    console.log('Redeem reward:', rewardId);
  };

  const handleUpdateProfile = (profileData) => {
    console.log('Update profile:', profileData);
  };

  const handleChangePassword = (passwordData) => {
    console.log('Change password:', passwordData);
  };

  const handleUpdatePreferences = (preferences) => {
    console.log('Update preferences:', preferences);
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-background rounded-lg border border-border p-4 sticky top-24">
                <h2 className="text-lg font-bold text-primary mb-4">{t.dashboard}</h2>
                <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-text-secondary hover:text-primary hover:bg-surface-hover'
                      }`}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeSection === 'overview' && (
                <div className="space-y-8">
                  <WelcomeSection 
                    user={userData} 
                    favoriteTeams={favoriteTeams} 
                    recentOrders={recentOrders} 
                  />
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div className="space-y-8">
                      <OrderHistory orders={recentOrders.slice(0, 3)} />
                    </div>
                    <div className="space-y-8">
                      <TeamFollowing 
                        followedTeams={favoriteTeams} 
                        teamNews={teamNews.slice(0, 3)} 
                        onUnfollowTeam={handleUnfollowTeam} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'orders' && (
                <OrderHistory orders={recentOrders} />
              )}

              {activeSection === 'wishlist' && (
                <WishlistSection 
                  wishlistItems={wishlistItems} 
                  onRemoveItem={handleRemoveWishlistItem}
                  onMoveToCart={handleMoveToCart}
                />
              )}

              {activeSection === 'teams' && (
                <TeamFollowing 
                  followedTeams={favoriteTeams} 
                  teamNews={teamNews} 
                  onUnfollowTeam={handleUnfollowTeam} 
                />
              )}

              {activeSection === 'collection' && (
                <MyCollection 
                  collection={collection}
                  onAddJersey={handleAddJersey}
                  onEditJersey={handleEditJersey}
                  onRemoveJersey={handleRemoveJersey}
                />
              )}

              {activeSection === 'loyalty' && (
                <LoyaltyProgram 
                  loyaltyData={loyaltyData}
                  rewards={rewards}
                  onRedeemReward={handleRedeemReward}
                />
              )}

              {activeSection === 'settings' && (
                <AccountSettings 
                  userProfile={userData}
                  onUpdateProfile={handleUpdateProfile}
                  onChangePassword={handleChangePassword}
                  onUpdatePreferences={handleUpdatePreferences}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;