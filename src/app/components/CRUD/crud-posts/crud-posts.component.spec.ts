import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPostsComponent } from './crud-posts.component';

describe('CrudPostsComponent', () => {
  let component: CrudPostsComponent;
  let fixture: ComponentFixture<CrudPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
