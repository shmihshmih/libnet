import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCatalogueComponent } from './digital-catalogue.component';

describe('DigitalCatalogueComponent', () => {
  let component: DigitalCatalogueComponent;
  let fixture: ComponentFixture<DigitalCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
