import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NseServiceService {

  constructor(private http: Http) { }

public getJSON(): Observable<any> {
    return this.http.get('https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxPharmaStockWatch.json')
                    .map((res: any) => res.json())
                    .catch((error: any) => error);
}

}
