import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { InfoActComponent } from './info-act/info-act.component';
import { BootstrapPricingComponent } from './bootstrap-pricing/bootstrap-pricing.component';
import { InfoComponent } from './bootstrap-pricing/info.component';
import { PricingNavComponent } from './bootstrap-pricing/pricing-nav.component';
import { CardContainerComponent } from './bootstrap-pricing/card-container/card-container.component';
import { FooterContainerComponent } from './bootstrap-pricing/footer-container/footer-container.component';
import { PricingCardComponent } from './bootstrap-pricing/card-container/pricing-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TitleBarComponent,
    InfoActComponent,
    BootstrapPricingComponent,
    InfoComponent,
    PricingNavComponent,
    CardContainerComponent,
    FooterContainerComponent,
    PricingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
