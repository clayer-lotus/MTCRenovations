import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAQuoteService {
  
  constructor(private http: HttpClient) { }

  rootURL1= "https://red-violet-horse-cape.cyclic.app/";  
 
  sendGetQuoteData( yourName: string,  email: string, phoneNumber: string, address: string, renovationRequired: string): Observable<boolean> {
    return this.http.post<boolean>(this.rootURL1 + "mtc-renovations/get-a-quote", {
      yourName:yourName,
      email:email,
      phoneNumber:phoneNumber,
      address:address,
      renovationRequired:renovationRequired
    }).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    console.error(error);
    return throwError(error.message || "Server Error");
  }

  
  
}
