import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterInfo } from './printer-info';

describe('PrinterInfo', () => {
  let component: PrinterInfo;
  let fixture: ComponentFixture<PrinterInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrinterInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
