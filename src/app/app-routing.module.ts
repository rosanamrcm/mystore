import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AgreementComponent } from './pages/agreement/agreement.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guard/auth.guard';
import { RequestsComponent } from './pages/requests/requests.component';
import { ExchangesComponent } from './pages/exchanges/exchanges.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AccountComponent } from './pages/account/account.component';
import { AddressComponent } from './pages/address/address.component';
import { CreditCardComponent } from './pages/credit-card/credit-card.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'agreement',
    component: AgreementComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard]
  },
  {
    path: 'requests',
    component: RequestsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'exchanges',
    component: ExchangesComponent,
    canActivate: [authGuard]
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [authGuard]
  },
  
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [authGuard]
  },
  {
    path: 'address',
    component: AddressComponent,
    canActivate: [authGuard]
  },
  {
    path: 'credit-card',
    component: CreditCardComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
