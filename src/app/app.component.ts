import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockData} from './stock-data';
import {StockService} from './stock.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgZone } from '@angular/core';
import { NseServiceService } from './nse-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  dataset: any;
  id: any;
  nseData: any;
  constructor(private nseService: NseServiceService, private stockService: StockService, private zone: NgZone) { }

  private stockData: StockData[];

  ngOnInit() {
    this.nseService.getJSON().subscribe((nseData) => {this.nseData = nseData;
      console.log(this.nseData);
    }, error => console.log(error));
    // this.stockService.getStock().subscribe((stockData)=>{
    //   console.log(stockData);
    //   this.stockData = stockData;
    //   console.log(this.stockData);
    // },(error)=>{
    //   console.log(error);
    // })
  }

}
