import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "",
        component: AboutComponent
    },
    {
        path: "about",
        component: AboutComponent
    }
];
