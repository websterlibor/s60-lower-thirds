import { Module } from '@nestjs/common';
import {LtGateway} from "./lt-gateway";
import { LtController } from './lt/lt.controller';

@Module({
    providers: [LtGateway],
    controllers: [LtController]
})
export class LtModule {}
