import { Component } from "@angular/core";


@Component({
    selector:'guest',
    templateUrl:'./guest.component.html',
    styleUrls:['./guest.component.css']
})
export class GuestList
{
    guestDetails = [
        {gId:101,gName:'Karan',gLastName:'Mehta',gGender:'Male',gAge:30},
        {gId:102,gName:'Mohan',gLastName:'Jain',gGender:'Male',gAge:30},
        {gId:103,gName:'Rashmi',gLastName:'Sharma',gGender:'Female',gAge:30},
        {gId:104,gName:'Akshay',gLastName:'Gupta',gGender:'Male',gAge:30},
        {gId:105,gName:'Kriti',gLastName:'Agarwal',gGender:'Female',gAge:30},
        {gId:106,gName:'Jitesh',gLastName:'Shah',gGender:'Male',gAge:30},
        {gId:107,gName:'Alex',gLastName:'Peter',gGender:'Male',gAge:30},
        {gId:108,gName:'Michelle',gLastName:'Furguson',gGender:'Female',gAge:30},
        {gId:109,gName:'Karthiki',gLastName:'Reddy',gGender:'Female',gAge:30},
        {gId:110,gName:'Mohit',gLastName:'Jain',gGender:'Male',gAge:30}
    ];

    addNewGuest()
    {
        var newGuest = {gId:110,gName:'Nikita',gLastName:'Shah',gGender:'Female',gAge:30}
        this.guestDetails.push(newGuest);

    }


}