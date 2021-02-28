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

    async update(request: Request, response: Response, next: NextFunction) {
        let bugToUpdate = await this.bugRepository.findOne(request.params.id);
        const reqbugToUpdate = request.body;
        bugToUpdate.name = reqbugToUpdate.name;
        bugToUpdate.description = reqbugToUpdate.description;
        return this.bugRepository.save(bugToUpdate);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const bugToRemove = await this.bugRepository.findOne(request.params.id);
        console.log(bugToRemove);
        return this.bugRepository.remove(bugToRemove);
    }
}
