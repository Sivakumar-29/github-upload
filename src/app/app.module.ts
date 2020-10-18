import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyValidationComponent } from './policy-validation/policy-validation.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { MenuComponent } from './share/menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { policyValidationReducer } from './store/reducer/policy-validation.reducer';
import { PolicyValidationEffect } from './store/effect/policy-validation.effect';

@NgModule({
  declarations: [
    AppComponent,
    PolicyValidationComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      policyValidation: policyValidationReducer
    }),
    EffectsModule.forRoot([PolicyValidationEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
