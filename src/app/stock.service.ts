import{Injectable}from'@angular/core';
import {HttpClient, HttpRequest}from '@angular/common/http';
import {RequestOptions, Http, Response, Headers}from '@angular/http';
import {Observable}from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StockService {

private baseUrl:string ="http://localhost:9080/person";
private headers = new Headers({'Content-Type':'application/json'});
private options = new RequestOptions({headers:this.headers});
constructor(private httpCli:Http) {}

  getStock():Observable<any>{
    return this.httpCli.get(this.baseUrl+'/api', this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  errorHandler(error:Response)
  {
    return Observable.throw(error || "Server Error");
  }
}
