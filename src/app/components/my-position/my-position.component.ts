import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssPositionModel } from '../../models/iss-position-model';

@Component({
  selector: 'app-my-position',
  templateUrl: './my-position.component.html',
  styleUrls: ['./my-position.component.scss']
})
export class MyPositionComponent implements OnInit {
  @Input() issPosition: IssPositionModel;
  @Output() handlePositionRequest: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getPosition() {
    this.handlePositionRequest.emit();
  }

}
