import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {


// Getting our current weather trough search by location
loc$: Observable<string> ;
loc: string;
//currentWeather: any = <any>{}; // Note: this param will be passed becuse it holds objects of our current location a.k.a shity
forecast: any = <any>{}; // Note: this param will be passed becuse it search objects of our current location a.k.a shity
msg: ''; // an empty string for error messagge

constructor(
  private store: Store <any>,
  private weatherService: WeatherService) {
  this.loc$ = store.pipe(select('loc'));
  this.loc$.subscribe(loc => {
    this.loc = loc;
    this.searchForcast(loc);
  })
}

ngOnInit() {}


/*searchWeather(loc: string) {
  this.msg = '';
  this.currentWeather = {};
  this.weatherService.getCurrentWeather(loc)
  .subscribe(res => {
    this.currentWeather = res;
   }, err => {

   }, () => {
     this.searchForcast(loc);
     
   })
  }*/

  searchForcast(loc: string) {
    this.weatherService.getForecast(loc)
    .subscribe( res => {
       this.forecast = res;
    }, err => {
            
    }, () => {

       this.searchForcast(loc);
    })
  }
  
  // Return objects 
  resultFound(){
    return Object.keys(this.forecast).length > 0;
  }
}

