import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicKeyComponent } from './magic-key.component';

describe('MagicKeyComponent', () => {
  let component: MagicKeyComponent;
  let fixture: ComponentFixture<MagicKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
