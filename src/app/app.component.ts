import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './services/api-service.service';
import { take } from 'rxjs/operators';
import { IssPositionModel } from './models/iss-position-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { icon, latLng, Layer, Map, MapOptions, marker, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'International Space Station';
  issCurrentPosition: IssPositionModel;
  requestPending = false;
  leafletOptions: MapOptions;
  currentTab = 0;
  mapRef: Map;

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.getPosition();
    this.initializeMap();
  }

  getPosition(mapTabActive?: boolean) {
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
        if (mapTabActive) {
          this.onTabSwitch();
        }
      }
    );
  }

  initializeMap() {
    this.leafletOptions = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'mapLayer' })
      ],
      zoom: 3,
      center: latLng(0, 0)
    };
  }

  onTabSwitch() {
    if (this.currentTab === 1) {
      const layer = marker([this.issCurrentPosition.latitude, this.issCurrentPosition.longitude], {
        icon: icon({
          iconSize: [250, 250],
          iconAnchor: [125, 125],
          iconUrl: '../assets/img/aim.svg'
        })
      });
      // this.mapRef.eachLayer((l) => this.mapRef.removeLayer(l));
      this.mapRef.eachLayer((l: Layer) => {
        if (!l.getAttribution()) {
          l.remove();
        }
      });
      this.mapRef.invalidateSize();
      this.mapRef.flyTo(latLng(this.issCurrentPosition.latitude, this.issCurrentPosition.longitude), 6);
      this.mapRef.addLayer(layer);
    }
  }

  handleCurrentTabChange(index: number) {
    this.currentTab = index;
  }

  onMapReady(map: Map) {
    this.mapRef = map;
  }
}
