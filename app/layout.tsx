import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import ShopifyCart from '@/components/shopify/cart-drawer';
import ShopHeader from '@/components/shopify/shop-header';
import ShopFooter from '@/components/shopify/shop-footer';

export const metadata: Metadata = {
  title: 'Shop | Frontend',
  description: 'Browse our products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="m-0 p-0 font-body">
        <Providers>
          <ShopHeader />
          <main className="min-h-screen">
            {children}
          </main>
          <ShopFooter />
          <ShopifyCart />
        </Providers>
      </body>
    </html>
  );
}
