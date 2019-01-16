import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpirationComponent } from './card-expiration.component';

describe('CardExpirationComponent', () => {
  let component: CardExpirationComponent;
  let fixture: ComponentFixture<CardExpirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExpirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExpirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
