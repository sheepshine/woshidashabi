import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class TestGurad implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const tests = this.reflector.get<string>("tests", context.getHandler())
        if (!tests) {
            return true
        }
        
        return tests === "nb"
    }
}