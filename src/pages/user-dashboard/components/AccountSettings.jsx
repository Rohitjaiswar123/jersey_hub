import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AccountSettings = ({ userProfile, onUpdateProfile, onChangePassword, onUpdatePreferences }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userProfile);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = () => {
    onUpdateProfile(formData);
    setIsEditing(false);
  };

  const handlePasswordSubmit = () => {
    if (passwordData.newPassword === passwordData.confirmPassword) {
      onChangePassword(passwordData);
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: 'User' },
    { id: 'security', name: 'Security', icon: 'Shield' },
    { id: 'preferences', name: 'Preferences', icon: 'Settings' },
    { id: 'privacy', name: 'Privacy', icon: 'Lock' }
  ];

  return (
    <div className="bg-background rounded-lg border border-border p-6">
      <h2 className="text-xl font-bold text-primary mb-6">Account Settings</h2>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-primary bg-surface border-b-2 border-primary' :'text-text-secondary hover:text-primary hover:bg-surface-hover'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">Personal Information</h3>
            <Button
              variant={isEditing ? 'success' : 'outline'}
              onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
              iconName={isEditing ? 'Check' : 'Edit'}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">First Name</label>
              <Input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter your first name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Last Name</label>
              <Input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter your last name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Phone Number</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-primary mb-2">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                disabled={!isEditing}
                placeholder="Tell us about yourself"
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background text-text-primary disabled:bg-surface disabled:text-text-secondary"
              />
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold text-text-primary mb-4">Shipping Addresses</h4>
            <div className="space-y-4">
              {formData.addresses?.map((address, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-text-primary">{address.label}</p>
                      <p className="text-sm text-text-secondary">{address.street}</p>
                      <p className="text-sm text-text-secondary">{address.city}, {address.state} {address.zip}</p>
                      <p className="text-sm text-text-secondary">{address.country}</p>
                    </div>
                    <div className="flex space-x-2">
                      {address.isDefault && (
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                          Default
                        </span>
                      )}
                      <Button variant="outline" size="sm" iconName="Edit" />
                      <Button variant="outline" size="sm" iconName="Trash2" />
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" iconName="Plus" iconPosition="left">
                Add New Address
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Change Password</h3>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Current Password</label>
                <Input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  placeholder="Enter current password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">New Password</label>
                <Input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Confirm New Password</label>
                <Input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>
              
              <Button
                variant="primary"
                onClick={handlePasswordSubmit}
                disabled={!passwordData.currentPassword || !passwordData.newPassword || passwordData.newPassword !== passwordData.confirmPassword}
              >
                Update Password
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div>
                <p className="font-medium text-text-primary">SMS Authentication</p>
                <p className="text-sm text-text-secondary">Receive verification codes via SMS</p>
              </div>
              <Button variant={formData.twoFactorEnabled ? 'success' : 'outline'}>
                {formData.twoFactorEnabled ? 'Enabled' : 'Enable'}
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Login Activity</h3>
            <div className="space-y-3">
              {formData.loginActivity?.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Monitor" size={20} className="text-text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">{activity.device}</p>
                      <p className="text-xs text-text-secondary">{activity.location} • {activity.time}</p>
                    </div>
                  </div>
                  {activity.current && (
                    <span className="bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Current
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Preferences Tab */}
      {activeTab === 'preferences' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { key: 'orderUpdates', label: 'Order Updates', description: 'Get notified about order status changes' },
                { key: 'teamNews', label: 'Team News', description: 'Receive updates about your favorite teams' },
                { key: 'productReleases', label: 'New Product Releases', description: 'Be first to know about new jersey releases' },
                { key: 'priceDrops', label: 'Price Drop Alerts', description: 'Get notified when wishlist items go on sale' },
                { key: 'loyaltyRewards', label: 'Loyalty Rewards', description: 'Updates about your loyalty program status' }
              ].map((pref) => (
                <div key={pref.key} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-text-primary">{pref.label}</p>
                    <p className="text-sm text-text-secondary">{pref.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.preferences?.[pref.key] || false}
                      onChange={(e) => handleInputChange('preferences', {
                        ...formData.preferences,
                        [pref.key]: e.target.checked
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-surface peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Display Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Language</label>
                <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background text-text-primary">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Currency</label>
                <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background text-text-primary">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Tab */}
      {activeTab === 'privacy' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Privacy Settings</h3>
            <div className="space-y-4">
              {[
                { key: 'profileVisibility', label: 'Profile Visibility', description: 'Make your profile visible to other users' },
                { key: 'collectionVisibility', label: 'Collection Visibility', description: 'Allow others to see your jersey collection' },
                { key: 'activityVisibility', label: 'Activity Visibility', description: 'Show your activity in community forums' },
                { key: 'dataSharing', label: 'Data Sharing', description: 'Share anonymized data to improve recommendations' }
              ].map((pref) => (
                <div key={pref.key} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-text-primary">{pref.label}</p>
                    <p className="text-sm text-text-secondary">{pref.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacy?.[pref.key] || false}
                      onChange={(e) => handleInputChange('privacy', {
                        ...formData.privacy,
                        [pref.key]: e.target.checked
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-surface peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Data Management</h3>
            <div className="space-y-4">
              <Button variant="outline" iconName="Download" iconPosition="left">
                Download My Data
              </Button>
              <Button variant="outline" iconName="Trash2" iconPosition="left">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;