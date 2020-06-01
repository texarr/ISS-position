import { Component, Input, OnInit } from '@angular/core';
import { IssPositionModel } from '../models/iss-position-model';

@Component({
  selector: 'app-my-position',
  templateUrl: './my-position.component.html',
  styleUrls: ['./my-position.component.scss']
})
export class MyPositionComponent implements OnInit {
  @Input() issPosition: IssPositionModel;

  constructor() { }

  ngOnInit() {
  }

}
