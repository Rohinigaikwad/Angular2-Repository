import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-expiration',
  template: `
  <div class="row">
  <div class="col-md-3 mb-3">
    <label for="cc-expiration">Expiration</label>
    <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
    <div class="invalid-feedback">
      Expiration date required
    </div>
  </div>
  <div class="col-md-3 mb-3">
    <label for="cc-expiration">CVV</label>
    <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
    <div class="invalid-feedback">
      Security code required
    </div>
  </div>
</div> `,
  styles: [`
    .row{
      max-width: 609.98px;
    }
    `]
})
export class CardExpirationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
