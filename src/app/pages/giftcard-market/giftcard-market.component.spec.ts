import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftcardMarketComponent } from './giftcard-market.component';

describe('GiftcardMarketComponent', () => {
  let component: GiftcardMarketComponent;
  let fixture: ComponentFixture<GiftcardMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftcardMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftcardMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
