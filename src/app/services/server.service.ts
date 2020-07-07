import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  ombd_url: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=362408ae';

  constructor(private http: HttpClient) {}

  getApi() {

    return this.http.get(this.ombd_url);
  }
}

