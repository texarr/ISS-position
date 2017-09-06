import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
  name: string,
  latitude: number,
  longitude: number,
  results: string
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

  ngOnInit() {
    var url = 'https://api.wheretheiss.at/v1/satellites/25544';
    var lat;
    var lon;
    var mapUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    var mapApiKey = '&key=AIzaSyAi5ihE7UwQGr_qdRmL6_f5FLOeiJAQKWI';
    var geoCodingUrl = mapUrl;
    var currentLocation;

    this.http.get<UserResponse>(url).subscribe(
      data => {
        geoCodingUrl += '?latlng=' + data.latitude + ',' + data.longitude + mapApiKey;

        // geocoding get
        this.http.get<UserResponse>(geoCodingUrl).subscribe(
          data => {
            console.log(data);
            if (data.results.length != 0) {
                data.results["0"].formatted_address;
            }

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
