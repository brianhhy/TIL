'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW 등록 성공:', registration.scope);
          })
          .catch((error) => {
            console.log('SW 등록 실패:', error);
          });
      });
    }
  }, []);

  return null;
} 