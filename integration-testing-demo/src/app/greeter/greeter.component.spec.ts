import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  // Since we are using webpack we do not need to compile, it is done
  //by ng cli be default - no need for ng cli does the compile for us
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ GreeterComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent ]
    })
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
