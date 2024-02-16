import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBg-_jwvWDWvVIKQCW5C3deMvn6XbNcehg",
  authDomain: "omkar-dhapte-developer.firebaseapp.com",
  projectId: "omkar-dhapte-developer",
  storageBucket: "omkar-dhapte-developer.appspot.com",
  messagingSenderId: "371167500697",
  appId: "1:371167500697:web:a297ad2f2ab2bc4e1c5b08",
  measurementId: "G-HFTN6B5R5W"
}
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideClientHydration(),
  importProvidersFrom([
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ])
  ]
};
