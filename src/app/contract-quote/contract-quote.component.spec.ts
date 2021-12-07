import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractQuoteComponent } from './contract-quote.component';

describe('ContractQuoteComponent', () => {
  let component: ContractQuoteComponent;
  let fixture: ComponentFixture<ContractQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
