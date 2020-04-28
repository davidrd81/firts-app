import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraPopupComponent } from './bitacora-popup.component';

describe('BitacoraPopupComponent', () => {
  let component: BitacoraPopupComponent;
  let fixture: ComponentFixture<BitacoraPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoraPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
