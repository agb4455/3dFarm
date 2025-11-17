import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { NavBar } from './components/nav-bar/nav-bar';

export const routes: Routes = [
    {path: "main", component: Main},
    //{path: "settings", component: Settings },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', redirectTo: '/main' }
];
