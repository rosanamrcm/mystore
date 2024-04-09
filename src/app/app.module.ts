import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';
import { AddressComponent } from './pages/address/address.component';
import { CreditCardComponent } from './pages/credit-card/credit-card.component';
import { ExchangesComponent } from './pages/exchanges/exchanges.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AgreementComponent } from './pages/agreement/agreement.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    AccountComponent,
    AddressComponent,
    CreditCardComponent,
    ExchangesComponent,
    FavoritesComponent,
    RequestsComponent,
    HeaderComponent,
    ProductListComponent,
    FooterComponent,
    AgreementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,

  ],
  exports: [
    RouterModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
