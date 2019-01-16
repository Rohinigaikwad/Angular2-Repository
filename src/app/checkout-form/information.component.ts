import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  template: `
  <div class="py-5 text-center">
  <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
    <h1>Checkout Form</h1>
    <p class="lead">Below is an example form built entirely with Bootstarp's form controls.
     Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
  </div>
  `,
  styles: [`
   .text-center{
     max-width:930px;
   }
  `
  ]
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
