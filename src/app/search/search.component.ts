import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AddLocation } from  '../favorite-location/add-location';

// List of locations
import { SET_LOCATION, ADD_LOCATION } from '../location-store';

// Call to OpenWatherMap @service
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
  // make empty array then send him to addLocation @param newLoc
  fav: any[] = [];
  msg: string;

  constructor(
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc);
     // this.AddLocation(loc);
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
    
  AddLocation(loc: string) {
    this.fav.push(loc);
      
     console.log(this.fav);
     return Object.keys(this.fav).length > 0;
   }
}

