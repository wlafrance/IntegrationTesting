import { TestBed,ComponentFixture ,async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOutlet,RouterLinkWithHref } from '@angular/router';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes([])],
        declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should have a router outlet',()=>{
      let de = fixture.debugElement.query(By.directive(RouterOutlet));

      expect(de).not.toBe(null);

  });

  // This technigue is good for "any" component that uses the routerLink directive
  it('should have a link that points to the todo page',()=>{
     // Because query will return the first, we actually need to get 
     // an array of links.
    //fixture.debugElement.query(By.directive(RouterLinkWithHref));
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    
    // <a href='/todos'>
    let index = debugElements.findIndex(de=> de.properties['href']=== '/todos');
    debugger;
    expect(index).toEqual(1);
  });
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
