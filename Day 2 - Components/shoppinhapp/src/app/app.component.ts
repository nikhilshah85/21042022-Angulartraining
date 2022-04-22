import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppinhapp';
  developerName:string = "Nikhil Shah";
  teamSize:number = 10;
  teamMembers:string[] = ['Mem 1','Mem 2', 'Mem 3'];

  
}
