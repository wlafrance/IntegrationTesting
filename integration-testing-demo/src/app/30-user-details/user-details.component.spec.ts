/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';


class RouterStub {
  // DUMMY LIGHT WEIGHT ROUTER CLASS IN ANGULAR
  navigate(params) {  // FAKE IMP

  }
}

class ActivatedRouteStub {
  private subject = new Subject(); // Defined in RXJS - is an observable, plus method to push values into it.
  //params: Observable<any> = Observable.empty();
  push(value) {
    this.subject.next(value);
  }

  // Public property
  get params() {
    return this.subject.asObservable();

  }
}


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the users page after saving', () => {
    //ARRANGE
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    // ACT
    component.save();

    //ASSERT
    expect(spy).toHaveBeenCalledWith(['users']);


  })

  it('should navigate the user to the not found page, when an invalid user id is passed', () => {
    //ARRANGE
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    // ACT
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });

    //ASSERT
    expect(spy).toHaveBeenCalledWith(['not-found']);
  })
});
