import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SET_LOCATION } from '../location-store';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  msg: string;

  constructor(
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc);
    })
  }

  ngOnInit() {
  }

search(searchForm: NgForm){
    if(searchForm.invalid){
    return;   
    }

    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }
   searchWeather(loc: string) {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
      }, err => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert('Failed to get weather.');
      }, () => {

      })
  }

  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }
}
