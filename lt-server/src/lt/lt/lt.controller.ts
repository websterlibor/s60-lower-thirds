import {Body, Controller, Get, Logger, Param, Post} from '@nestjs/common';
import {LtGateway} from "../lt-gateway";

@Controller('/')
export class LtController {
    constructor(public ltGateway: LtGateway) {
    }


    @Post('preview')
    async preview(@Body() data: any) {

        this.ltGateway.sendToPreview(data);
        return data;
        //return await this.productsService.add(data);
    }


    @Post('public')
    async public(@Body() data: any) {

        this.ltGateway.sendToPublic(data);
        return data;
        //return await this.productsService.add(data);
    }



}
