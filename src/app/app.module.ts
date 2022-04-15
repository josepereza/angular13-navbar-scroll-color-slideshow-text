import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    HeaderComponent,
    JumbotronComponent,
    PricingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
