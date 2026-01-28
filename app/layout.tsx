import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import ShopifyCart from '@/components/shopify/cart-drawer';
import ShopHeader from '@/components/shopify/shop-header';
import ShopFooter from '@/components/shopify/shop-footer';
import Theme from '@/components/Theme';

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
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <Theme />
      </head>
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
