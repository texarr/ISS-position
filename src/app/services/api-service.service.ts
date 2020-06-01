import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private satPosApiUrl = 'https://api.wheretheiss.at/v1/satellites';

  constructor(
    private http: HttpClient
  ) { }

  getIssPosition(id: string) {
    return this.http.get(`${this.satPosApiUrl}/${id}`);
  }
}
