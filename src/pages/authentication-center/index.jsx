import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import AuthenticationHero from './components/AuthenticationHero';
import ExpertTeam from './components/ExpertTeam';
import AuthenticationProcess from './components/AuthenticationProcess';
import AuthenticationGuide from './components/AuthenticationGuide';
import CertificationShowcase from './components/CertificationShowcase';
import AuthenticationGuarantee from './components/AuthenticationGuarantee';
import SuccessStories from './components/SuccessStories';
import Icon from '../../components/AppIcon';

const AuthenticationCenter = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        <AuthenticationHero currentLanguage={currentLanguage} />
        <ExpertTeam currentLanguage={currentLanguage} />
        <AuthenticationProcess currentLanguage={currentLanguage} />
        <AuthenticationGuide currentLanguage={currentLanguage} />
        <CertificationShowcase currentLanguage={currentLanguage} />
        <SuccessStories currentLanguage={currentLanguage} />
        <AuthenticationGuarantee currentLanguage={currentLanguage} />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={20} color="white" />
                </div>
                <span className="text-lg font-bold">Jersey Hub</span>
              </div>
              <p className="text-sm opacity-80">
                Authentic jerseys, verified by experts, guaranteed for life.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Authentication</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#process" className="hover:opacity-100 transition-opacity">Our Process</a></li>
                <li><a href="#experts" className="hover:opacity-100 transition-opacity">Expert Team</a></li>
                <li><a href="#guarantee" className="hover:opacity-100 transition-opacity">Guarantee</a></li>
                <li><a href="#certificates" className="hover:opacity-100 transition-opacity">Certificates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
                <li><a href="#guide" className="hover:opacity-100 transition-opacity">Authentication Guide</a></li>
                <li><a href="#stories" className="hover:opacity-100 transition-opacity">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>auth@jerseyhub.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>1-800-JERSEY-1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-600 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; {new Date().getFullYear()} Jersey Hub. All rights reserved. Authentication services provided by certified experts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthenticationCenter;