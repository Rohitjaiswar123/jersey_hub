import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroCarousel from './components/HeroCarousel';
import TrendingSection from './components/TrendingSection';
import ExclusiveDrops from './components/ExclusiveDrops';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import AuthenticationTrustBar from './components/AuthenticationTrustBar';
import FanSpotlight from './components/FanSpotlight';
import QuickAccessModules from './components/QuickAccessModules';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroCarousel />
        
        {/* Trending Jerseys */}
        <TrendingSection />
        
        {/* Exclusive Drops */}
        <ExclusiveDrops />
        
        {/* Personalized Recommendations */}
        <PersonalizedRecommendations />
        
        {/* Authentication Trust Bar */}
        <AuthenticationTrustBar />
        
        {/* Fan Spotlight */}
        <FanSpotlight />
        
        {/* Quick Access Modules */}
        <QuickAccessModules />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Jersey Hub</h3>
              <p className="text-primary-foreground/80 mb-4">
                Your trusted destination for authentic sports jerseys. 
                Connecting fans to their passion through premium, verified merchandise.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                  <span className="text-sm">i</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="/team-store" className="hover:text-primary-foreground transition-colors">Team Stores</a></li>
                <li><a href="/customization-studio" className="hover:text-primary-foreground transition-colors">Customization</a></li>
                <li><a href="/authentication-center" className="hover:text-primary-foreground transition-colors">Authentication</a></li>
                <li><a href="/user-dashboard" className="hover:text-primary-foreground transition-colors">My Account</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-primary-foreground/80 mb-4 text-sm">
                Get the latest drops, exclusive offers, and fan stories.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-md text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-4 py-2 bg-accent hover:bg-accent-600 text-accent-foreground rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Jersey Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;