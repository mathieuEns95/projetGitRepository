import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {hostReportError} from 'rxjs/internal-compatibility';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private headers = new HttpHeaders();
  private userUrl = 'http://localhost:8080/api/test/user';
  private rhUrl = 'http://localhost:8080/api/test/rh';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient , private router: Router) { }

  sendMailCSV(formData) {
    this.http.post<any>(this.baseUrl + 'sendMailAttach', formData).subscribe(
      res => {
        location.reload();
        pipe(
          tap(data => {

            console.log(`sendEmail returned: ${JSON.stringify(data)}`
            )
          }))

      },

    );
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/test/saveCv',
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
}
