import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {hostReportError} from 'rxjs/internal-compatibility';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private headers = new HttpHeaders();
  private userUrl = 'http://localhost:8080/api/test/user';
  private rhUrl = 'http://localhost:8080/api/test/rh';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient , private router: Router, private toastr: ToastrService) { }

  sendMailCSV(formData) {
    this.http.post<any>(this.baseUrl + 'sendMailAttach', formData).subscribe(
      res => {
        location.reload();
        pipe(
          tap(data => {

            console.log(`sendEmail returned: ${JSON.stringify(data)}`);
          }));

      },

    );
    return true;
  }






  sendEmail(mailMessage: any) {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    if (mailMessage) {
      headers = headers.set('Content-Type', 'application/json');
    }

    this.http.post(`http://localhost:8080/sendMail`, mailMessage, {
      headers
    }).subscribe(result => {
      console.log('Email sent!');
    });

  }


















  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/uploadFile',
      data, {
      reportProgress: true,
      responseType: 'text'
        });
    return this.http.request(newRequest);
      }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl,
      { responseType: 'text' });
  }

  getRHBoard(): Observable<string> {
    return this.http.get(this.rhUrl,
      { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl,
      { responseType: 'text' });
  }
  sendMail(): Observable<string> {
    return this.http.get(this.userUrl,
      {responseType: 'text'});
  }

  public getResource(url) {
    return this.http.get(url);
  }

  public saveResource(url, data) {
    return this.http.post(url, data);
  }
  public updateResource(url, data) {
    return this.http.put(url, data);
  }

  public deleteResource(url) {
    return this.http.delete(url);
  }


}
