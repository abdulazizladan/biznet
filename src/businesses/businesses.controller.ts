import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusinessesService } from './businesses.service';

@Controller('/businesses')
export class BusinessesController {
    constructor( private readonly businessService : BusinessesService){

    }

    @Get()
    findAll() : string{
        return this.businessService.findAll();
    }

    @Get('find')
    find() : string{
        return this.businessService.find();
    }

    @Post('add') 
    add( 
        @Body
        ('name') name : string
    ) : any{
        this.businessService.addBusiness(name);
        return name;
    }

}
