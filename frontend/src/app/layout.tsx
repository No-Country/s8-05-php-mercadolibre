'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import store from '@/redux/store';
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
