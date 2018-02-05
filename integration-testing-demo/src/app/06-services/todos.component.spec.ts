// We want to test the init, but do not want to use a real service
// We wil fake the service so the test will be faster.

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
//import { window } from 'rxjs/operators/window';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);

  });

  it('should set the todos property with the items return from the server(service)', () => {

    // ARRANGE
    // The code below will replace the real implementation to get the data, not the business logic
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
      // or an array of todo items
      //return Observable.from([[{id:'1, title:'a'},{id'2, title:'b'},{id:'3, title:'c'}]]);
    });

    // ACT
    component.ngOnInit();
    // ASSERT
    expect(component.todos).toBe(todos);
    expect(component.todos.length).toBe(todos.length);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add')
      .and
      .callFake(t => {
        return Observable.empty();
      });

    component.add();

    expect(spy).toHaveBeenCalled();  // How to test if a given method has been called
  });
  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    let spy = spyOn(service, 'add')
      .and
      .callFake(t => {
        return Observable.from([todo]);
      });

    component.add();

    // expect(component.todos.indexOf(todo)).toBe(-1);
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);

  });
  // A cleaner method to write this test - instead of callFake
  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));
    //.callFake(t => {
    //  return Observable.from([todo]);
    //});

    component.add();

    // expect(component.todos.indexOf(todo)).toBe(-1);
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);

  });

  it('should set the message property if server returns an error when adding a new todo', () => {
    // ARRANGE
    let error = 'Error from the server';
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));
    // ACT
    component.add();
    // ASSERT
    expect(component.message).toBe(error);

  });

  // FOR THE DELETE METHOD WE NEED TWO TEST

  it('should call the server to delete the todo item if they user confirms', () => {
    // Besides changing the implementation of our service
    // we also want to change the window.confirm method

    // window.confirm();  // We do not want to display a confirm dialoge box when executing unit test
    // ARRANGE
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    // ACT
    component.delete(1);

    // ASSERT
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete the todo item if they user cancels', () => {
    // ARRANGE
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    // ACT
    component.delete(1);
    // ASSERT
    expect(spy).not.toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalledWith(1);
  });
});