import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  // styleUrls: ['./model.component.css']
  styles: [`
    p {
      color : red;
    }
  `]
})
export class ModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
