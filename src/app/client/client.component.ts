import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  // styleUrls: ['./client.component.css']
  styles : [`
   p {
    color : green;
   }
  `]
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
