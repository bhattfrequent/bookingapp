import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerComponentComponent } from './lower-component.component';

describe('LowerComponentComponent', () => {
  let component: LowerComponentComponent;
  let fixture: ComponentFixture<LowerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
