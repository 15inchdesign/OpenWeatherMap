import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  // Getting our current weather trough search by location
  loc$: Observable<string> ;
  loc: string;
  currentWeather: any = <any>{}; // Note: this param will be passed becuse it holds object of our current location
  msg: ''; // an empty string for error messagge

  constructor(
    private store: Store <any>,
    private weatherService: WeatherService) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc);
    })
  }

  ngOnInit() {}


  searchWeather(loc: string) {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
        //console.log(res);
      }, err => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert('Failed to get weather for your location');
      }, () => {

      })
    }
    
    resultFound(){
      return Object.keys(this.currentWeather).length > 0;
    }
  }

