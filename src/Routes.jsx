import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import CustomizationStudio from "pages/customization-studio";
import TeamStore from "pages/team-store";
import AuthenticationCenter from "pages/authentication-center";
import ProductDetailPage from "pages/product-detail-page";
import UserDashboard from "pages/user-dashboard";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/customization-studio" element={<CustomizationStudio />} />
        <Route path="/team-store" element={<TeamStore />} />
        <Route path="/authentication-center" element={<AuthenticationCenter />} />
        <Route path="/product-detail-page" element={<ProductDetailPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;