'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode, useEffect } from 'react';

import store from '@/redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.title = 'No Country';
  }, []);
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </body>
      </html>
    </Provider>
  );
}
