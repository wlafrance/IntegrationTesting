import { HomeComponent } from './home/home.component';
import { TodosComponent } from './20-todos/todos.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './30-user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];