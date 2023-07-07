import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailfeatureService {
  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    const url = 'YOUR_SERVER_ENDPOINT';

    return this.http.post(url, data);
  }
}
