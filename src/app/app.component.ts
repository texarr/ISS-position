import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './services/api-service.service';
import { take } from 'rxjs/operators';
import { IssPositionModel } from './models/iss-position-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'International Space Station';
  issCurrentPosition: IssPositionModel;
  requestPending = false;

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.getPosition();
  }

  getPosition() {
    this.requestPending = true;
    this.apiService.getIssPosition('25544').pipe(take(1)).subscribe(
      (response: IssPositionModel) => {
        this.issCurrentPosition = response;
        this.snackBar.open('Success, You can see my current position', null, {duration: 2000});
      }, (error: HttpErrorResponse) => {
        // show error modal
        this.snackBar.open(`Cannot see current position, error code: ${error.status}`, null, {duration: 2000});
      }, () => {
        // show confirmation modal
        this.requestPending = false;
      }
    );
  }
}
