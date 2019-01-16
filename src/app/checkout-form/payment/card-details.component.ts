import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  template: `
  <div class="row">
      <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
       </div>
           `,
  styles: [`.row{
    max-width:609.98px;
    text-align:left;
  }
  `]
})
export class CardDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
