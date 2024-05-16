import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSeriesComponent } from './detalle-series.component';

describe('DetalleSeriesComponent', () => {
  let component: DetalleSeriesComponent;
  let fixture: ComponentFixture<DetalleSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSeriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
