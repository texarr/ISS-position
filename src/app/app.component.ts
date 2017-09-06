import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
  name: string,
  latitude: number,
  longitude: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'International Space Station';

  constructor(private http: HttpClient) {

  }

  ngOnInit():void {
    var url = 'https://api.wheretheiss.at/v1/satellites/25544';
    var lat;
    var lon;
    var mapUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    var mapApiKey = '&key=AIzaSyAi5ihE7UwQGr_qdRmL6_f5FLOeiJAQKWI';
    var geoCodingUrl = mapUrl;

    this.http.get<UserResponse>(url).subscribe(
      data => {
        console.log("My name is" + data.name);
        console.log("Latitude " + data.latitude);
        console.log("longitude " + data.longitude);
        geoCodingUrl += '?latlng=' + data.latitude + ',' + data.longitude + mapApiKey;
        console.log(geoCodingUrl);

        // geocoding get
        this.http.get<UserResponse>(geoCodingUrl).subscribe(
          data => {
            console.log(data);
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("Client-side error occured");
            } else {
              console.log("Server-side error occured");
            }
          }
        )

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured");
        } else {
          console.log("Server-side error occured");
        }
      }
    )
  }
}
