import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { PublicComponent } from './public/public.component';
import { UsersComponent } from './users/components/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'public', component: PublicComponent, loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'users', component: UsersComponent, loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
