import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OrderHistory = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'text-success bg-success-50';
      case 'shipped': return 'text-primary bg-primary-50';
      case 'processing': return 'text-warning bg-warning-50';
      case 'cancelled': return 'text-error bg-error-50';
      default: return 'text-text-secondary bg-surface';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return 'CheckCircle';
      case 'shipped': return 'Truck';
      case 'processing': return 'Clock';
      case 'cancelled': return 'XCircle';
      default: return 'Package';
    }
  };

  return (
    <div className="bg-background rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Order History</h2>
        <Button variant="outline" iconName="Download" iconPosition="left">
          Export
        </Button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                <div className="flex-shrink-0">
                  <Image
                    src={order.items[0].image}
                    alt={order.items[0].name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  {order.items.length > 1 && (
                    <div className="absolute -mt-2 -ml-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      +{order.items.length - 1}
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-text-primary">Order #{order.orderNumber}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      <Icon name={getStatusIcon(order.status)} size={12} className="inline mr-1" />
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-1">
                    {order.items[0].name}
                    {order.items.length > 1 && ` and ${order.items.length - 1} more item${order.items.length > 2 ? 's' : ''}`}
                  </p>
                  <p className="text-sm text-text-tertiary">Ordered on {order.orderDate}</p>
                </div>
              </div>
              
              <div className="flex flex-col lg:items-end space-y-2">
                <p className="text-lg font-bold text-primary">${order.total}</p>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                  >
                    {selectedOrder === order.id ? 'Hide Details' : 'View Details'}
                  </Button>
                  {order.status === 'delivered' && (
                    <Button variant="primary" size="sm" iconName="RotateCcw">
                      Reorder
                    </Button>
                  )}
                  {order.status === 'shipped' && (
                    <Button variant="outline" size="sm" iconName="MapPin">
                      Track
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            {selectedOrder === order.id && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Items Ordered</h4>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-text-primary">{item.name}</p>
                            <p className="text-xs text-text-secondary">Size: {item.size} | Qty: {item.quantity}</p>
                          </div>
                          <p className="text-sm font-medium text-primary">${item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Shipping Details</h4>
                    <div className="text-sm text-text-secondary space-y-1">
                      <p><strong>Address:</strong> {order.shippingAddress}</p>
                      <p><strong>Method:</strong> {order.shippingMethod}</p>
                      {order.trackingNumber && (
                        <p><strong>Tracking:</strong> {order.trackingNumber}</p>
                      )}
                      {order.estimatedDelivery && (
                        <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;