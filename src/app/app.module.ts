
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppConfig } from '../environments/environment.dev';
import { ReactiveFormsModule } from '@angular/forms';

// NG translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// feature modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// components
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RentingComponent } from './components/renting/renting.component';
import { FinanceComponent } from './components/finance/finance.component';
import { OrdersHomeComponent } from './components/orders/orders-home/orders-home.component';
import { RentingHomeComponent } from './components/renting/renting-home/renting-home.component';
import { FinanceHomeComponent } from './components/finance/finance-home/finance-home.component';
import { OrdersCreateComponent } from './components/orders/orders-create/orders-create.component';
import { OrdersCheckoutComponent } from './components/orders/orders-checkout/orders-checkout.component';
import { RentingCreateComponent } from './components/renting/renting-create/renting-create.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent, 
    NavigatorComponent, 
    OrdersComponent, 
    RentingComponent, 
    FinanceComponent, 
    OrdersHomeComponent, 
    RentingHomeComponent, 
    FinanceHomeComponent, 
    OrdersCreateComponent, 
    OrdersCheckoutComponent, 
    RentingCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(AppConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
