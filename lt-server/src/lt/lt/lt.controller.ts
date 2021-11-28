import {Body, Controller, Get, Logger, Param, Post} from '@nestjs/common';
import {LtGateway} from "../lt-gateway";

@Controller('lt')
export class LtController {
    constructor(public ltGateway: LtGateway) {
    }
    @Get('send')
    sendMessage() {
        this.ltGateway.send('ahoj');
        return "sent";
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

    @Get('test-preview')
    testPreview() {
        this.ltGateway.sendToPreview('ahoj');
        return "test preview";
    }



}
