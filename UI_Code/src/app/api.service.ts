// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// import { catchError, map, Observable, throwError } from 'rxjs';
// import { Http2ServerRequest } from 'http2';

// enum HttpMethod{
//   GET,
//   POST,
//   PUT,
//   DELETE,
//   PATCH
// }
// @Injectable({
//   providedIn: 'root'
// })


// export class ApiService {

//   constructor(private http: HttpClient) { }

// private getData(url: string,httpmethod?: HttpMethod,body?: any,queryParams?: any,headers?: any) 
// {
//   let observable: Observable<any>;
//   let defaultOptins:any= {};
//   if (queryParams) {
//     defaultOptins.params = new HttpParams({fromObject: queryParams
//     });
//   }
//   const headersObj = {'Content-Type': 'application/json'};
//   if (headers) {
//     defaultOptins.headers = new HttpHeaders({...headersObj, ...headers});
//   } else {
//     defaultOptins.headers = new HttpHeaders({...headersObj});
//   }

//   switch (httpmethod) {
//     case HttpMethod.GET:
//       observable = this.http.get(url, defaultOptins);
//       break;

//     case HttpMethod.POST:
//       observable = this.http.post(url, body, defaultOptins);
//       break;

//     case HttpMethod.PUT:
//       observable = this.http.put(url, body, defaultOptins);
//       break;

//     case HttpMethod.DELETE:
//       observable = this.http.delete(url, defaultOptins);
//       break;

//     case HttpMethod.PATCH:
//       observable = this.http.patch(url, body, defaultOptins);
//       break;

//     default:
//       observable = this.http.get(url, defaultOptins);
//       break;
//   }
//   return observable.pipe(
//     map(response => response),
//     catchError(err => {
//       console.log(err);
//       switch (err.status) {
//         case 400:
//             // this.errorHandler(Lang.errorTxt, Lang.badRequest);
//             break;
//         case 401:
//               // this.renewAccessTokenCallBack(err.url);
//             break;
//         case 403:
//             break;

//         case 409:
//         case 400:
//         case 404:
//         case 500:
//             // this.errorHandler(Lang.errorTxt, Lang.internalServerError);

//             break;
//         case 413:
//             // this.errorHandler(Lang.errorTxt, Lang.fileToLargeTxt);

//             break;
//         case 0:
//             break;
//     }
//       return throwError(() => new Error(err))
//   })
//   );
// }


//    //get API
//    public get(url: string, queryParams?: any, headers?: any) {
//     return this.getData(url, HttpMethod.GET, null, queryParams, headers);
//   }
//   public getApi(url: string, body?: any, authorization?: any, options?: any) {
//     // console.log("inside get "+url);
//     return this.getData(url, HttpMethod.GET, body, authorization, options);
//   }
//   //post API
//   public post(url: string, body?: any, authorization?: any, options?: any) {
//     // console.log("inside post");
//     return this.getData(url, HttpMethod.POST, body, authorization, options);
//   }
//   //post API
//   public put(url: string, body?: any) {
//     return this.getData(url, HttpMethod.PUT, body);
//   }

//   public patch(url: string, body?: any) {
//     return this.getData(url, HttpMethod.PATCH, body);
//   }
//   //post API
//   public delete(url: string) {
//     return this.getData(url, HttpMethod.DELETE);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000';

  getInspector() {
    console.log("Here");
    return this.http.get(this.rootURL + '/inspector');
  }

  getUser() {
    return this.http.get(this.rootURL + '/user');
  }

  addInspector(user: any) {
    return this.http.post(this.rootURL + '/addInspector', {user});
  }
}