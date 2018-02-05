// SIMPLE FOR TESTING
// 1. Ensure the controls are on the form
// 2. Ensure required validator is working

import { FormBuilder } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';
//import { TodosComponent } from '../06-services/todos.component';
//import { TodoService } from '../20-todos/todo.service';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;


  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder);
  });

  it('should create a form with two controls', () => {
    // We are not acting on the form component, just varifying the intial state
    // So we will not have the standard AAA test setup.  Just want to ensure we ahve th 
    // proper number of controls~

    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBeTruthy();

  });

  it('should make a name control required', () => {
    // ARRANGE
    let control = component.form.get('name');

    // ACT
    control.setValue('');

    // ASSERT
    expect(control.invalid).toBeTruthy();
    expect(control.valid).toBeFalsy();
  });
});