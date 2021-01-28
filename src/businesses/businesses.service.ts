import { Injectable } from '@nestjs/common';
import { Business } from './business.model'

@Injectable()
export class BusinessesService {
    
    businesses : Business[] = [];

    findAll() : any{
        return this.businesses
    }

    find() : any{
        return { 'name' : 'ABC ltd'};
    }

    addBusiness( name : string){
        const newBusiness = new Business(name);
        this.businesses.push(newBusiness);
        return name;
    } 
}
