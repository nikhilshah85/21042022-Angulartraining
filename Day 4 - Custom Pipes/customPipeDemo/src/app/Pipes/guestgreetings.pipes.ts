import { Pipe, PipeTransform } from "@angular/core";



@Pipe({name:'gendergreetings'})
export class Greetingspipe implements PipeTransform
{
    transform(value:any,firstName:string, lastName:string) {
        if(value == 'Male')
        {
            return 'Mr. ' + firstName + ' ' + lastName;
        }
        else
        {
            return 'Miss. ' + firstName + ' ' + lastName;
        }
    }
}