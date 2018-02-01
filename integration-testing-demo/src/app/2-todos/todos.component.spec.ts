// Test show how you provide dependencies for intergration test
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpModule } from '@angular/http';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { expand } from 'rxjs/operators/expand';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TESTING NG ONINIT using spies...
  it('should load todos from the server', () => {
    let service = TestBed.get(TodoService); // WORKS if you have provided the dependency at the module level
    // fixture.debugElement.injector.get(TodoService); an example 
    spyOn(service, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]))

    fixture.detectChanges();

    //ASSERT
    expect(component.todos.length).toBe(3);
  });
});
