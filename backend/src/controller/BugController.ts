import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Bug } from '../entity/Bug';

export class BugController {
    private bugRepository = getRepository(Bug);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.bugRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.bugRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.bugRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const bugToRemove = await this.bugRepository.findOne(request.params.id);
        await this.bugRepository.remove(bugToRemove);
    }
}
