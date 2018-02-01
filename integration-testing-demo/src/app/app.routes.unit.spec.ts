// A SIMPLE UNIT TEST OUTSIDE THE ANGULAR ENVIRONMENT
import {routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';

// it('should contain a route for /users/:id',()=>{
//     expect(routes).toContain({
//         path: 'users',
//         component:UserDetailsComponent

//     });
// });

describe('routes',()=>{
    it('should contain a route for /users',()=>{
        expect(routes).toContain({
            path: 'users',
            component:UsersComponent
        });
    });

it('should contain a route for /todos',()=>{
        expect(routes).toContain({
            path: 'todos',
            component:TodosComponent
        });
    });



});