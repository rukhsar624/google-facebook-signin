import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './compoment/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider} from '@abacritt/angularx-social-login';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com'
}}
@NgModule({
  declarations: [
    LoginComponent,
    AppComponent
  ],
  imports: [
    SocialLoginModule,
    AppRoutingModule,
    BrowserModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '842190869240-d5be5697sst8psahcaoai2m2u92istdd.apps.googleusercontent.com'
            )
          },
          {
            id:FacebookLoginProvider.PROVIDER_ID,
            provider:new FacebookLoginProvider(
              '1678680989199604'
            )
          }

        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

