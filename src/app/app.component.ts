import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './services/api-service.service';
import { take } from 'rxjs/operators';
import { IssPositionModel } from './models/iss-position-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'International Space Station';
  issCurrentPosition: IssPositionModel;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.getPosition();
  }

  getPosition() {
    this.apiService.getIssPosition('25544').pipe(take(1)).subscribe(
      (response: IssPositionModel) => {
        this.issCurrentPosition = response;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }, () => {
        console.log(this.issCurrentPosition);
      }
    );
  }
}
