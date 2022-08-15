// REACT
import React, { ReactNode } from 'react';

// PROVIDERS
import { AuthProvider } from './auth';
import { CartProvider } from './cart';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  );
};

export default AppProvider;
