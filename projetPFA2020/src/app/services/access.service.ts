import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  public host = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  public saveResource(url, data) {
    return this.httpClient.post(url, data);
  }

  public getResource(url) {
    return this.httpClient.get(url);
  }

  public updateResource(url, data) {
    return this.httpClient.put(url, data);
  }

  public deleteResource(url) {
    return this.httpClient.delete(url);
  }
}
