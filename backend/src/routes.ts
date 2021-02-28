import { UserController } from './controller/UserController';
import { BugController } from './controller/BugController';
import { TaskController } from './controller/TaskController';

export const Routes = [
    // User routes
    {
        method: 'get',
        route: '/users',
        controller: UserController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/users/:id',
        controller: UserController,
        action: 'one',
    },
    {
        method: 'post',
        route: '/users',
        controller: UserController,
        action: 'save',
    },
    {
        method: 'delete',
        route: '/users/:id',
        controller: UserController,
        action: 'remove',
    },
    // Bug routes
    {
        method: 'get',
        route: '/bugs',
        controller: BugController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/bugs/:id',
        controller: BugController,
        action: 'one',
    },
    {
        method: 'post',
        route: '/bugs',
        controller: BugController,
        action: 'save',
    },
    {
        method: 'put',
        route: '/bugs/:id',
        controller: BugController,
        action: 'update',
    },
    {
        method: 'delete',
        route: '/bugs/:id',
        controller: BugController,
        action: 'remove',
    },
    // Task routes
    {
        method: 'get',
        route: '/tasks',
        controller: TaskController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/tasks/:id',
        controller: TaskController,
        action: 'one',
    },
    {
        method: 'post',
        route: '/tasks',
        controller: TaskController,
        action: 'save',
    },
    {
        method: 'put',
        route: '/tasks/:id',
        controller: TaskController,
        action: 'update',
    },
    {
        method: 'delete',
        route: '/tasks/:id',
        controller: TaskController,
        action: 'remove',
    },
];
