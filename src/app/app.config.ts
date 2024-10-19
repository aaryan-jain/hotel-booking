import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'hotel-booking-ade8f',
        appId: '1:878991814977:web:93c038f8f8196a7dfd71c0',
        storageBucket: 'hotel-booking-ade8f.appspot.com',
        apiKey: 'AIzaSyAiKi5-W5Iie7-mYJEGElMAHT8SckTeS6E',
        authDomain: 'hotel-booking-ade8f.firebaseapp.com',
        messagingSenderId: '878991814977',
        measurementId: 'G-NLH9385DYC',
      })
    ),
    provideFunctions(() => getFunctions()),
  ],
};
