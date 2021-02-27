import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Task } from '../entity/Task';
import { disposeEmitNodes } from 'typescript';

export class TaskController {
    private taskRepository = getRepository(Task);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.taskRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.taskRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.taskRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let taskToUpdate = await this.taskRepository.findOne(request.params.id);
        let reqTaskToUpdate = request.body;
        taskToUpdate.text = reqTaskToUpdate.text;
        taskToUpdate.day = reqTaskToUpdate.day;
        taskToUpdate.reminder = reqTaskToUpdate.reminder;
        return this.taskRepository.save(taskToUpdate);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const taskToRemove = await this.taskRepository.findOne(request.params.id);
        return await this.taskRepository.remove(taskToRemove);
    }
}
