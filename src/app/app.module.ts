import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { InformationComponent } from './checkout-form/information.component';
import { CartComponent } from './checkout-form/cart/cart.component';
import { BillingAddressComponent } from './checkout-form/billing-address/billing-address.component';
import { SelectorComponent } from './checkout-form/selector/selector.component';
import { CheckboxComponent } from './checkout-form/checkbox/checkbox.component';
import { PaymentComponent } from './checkout-form/payment/payment.component';
import { CardDetailsComponent } from './checkout-form/payment/card-details.component';
import { CardExpirationComponent } from './checkout-form/payment/card-expiration.component';
import { ContinueButtonComponent } from './checkout-form/continue-button/continue-button.component';
import { FooterComponent } from './checkout-form/footer/footer.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { from } from 'rxjs';
import { CalculatorComponent } from './databinding/calculator/calculator.component';

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
    PricingCardComponent,
    CheckoutFormComponent,
    InformationComponent,
    CartComponent,
    BillingAddressComponent,
    SelectorComponent,
    CheckboxComponent,
    PaymentComponent,
    CardDetailsComponent,
    CardExpirationComponent,
    ContinueButtonComponent,
    FooterComponent,
    DatabindingComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
