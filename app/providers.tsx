'use client';

import React from 'react';
import { ShopifyProvider } from '@/contexts/shopify-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ShopifyProvider>
      {children}
    </ShopifyProvider>
  );
}
