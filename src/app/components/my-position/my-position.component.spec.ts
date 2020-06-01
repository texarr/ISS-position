import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPositionComponent } from './my-position.component';

describe('MyPositionComponent', () => {
  let component: MyPositionComponent;
  let fixture: ComponentFixture<MyPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
