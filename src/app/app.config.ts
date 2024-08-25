import { ApplicationConfig } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { environment } from "../enivornment/enivorment";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(environment.firebaseapp)),
    provideFirestore(() => getFirestore())
  ]
};