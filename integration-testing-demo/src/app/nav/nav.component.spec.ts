import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [NavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // This technigue is good for "any" component that uses the routerLink directive
  it('should have a link that points to the todo page', () => {
    // Because query will return the first, we actually need to get 
    // an array of links.
    //fixture.debugElement.query(By.directive(RouterLinkWithHref));
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    // <a href='/todos'>
    let index = debugElements.findIndex(de => de.properties['href'] === '/todos');
    debugger;
    expect(index).toEqual(1);
  });


});
