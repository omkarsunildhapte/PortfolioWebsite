import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./product/platform/platform.component').then(m => m.PlatformComponent)
    },
    // {
    //     path: 'platform',
    //     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    // }
];
