import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignOneComponent } from './design-one.component';

describe('DesignOneComponent', () => {
  let component: DesignOneComponent;
  let fixture: ComponentFixture<DesignOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
