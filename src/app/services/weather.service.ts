
/* Here we call API's endpoints with our APIKey as params 
* reffer to file enviroments/enviroment.ts
*/ 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Loading our apiKey and apiUrl
import { environment } from 'src/environments/environment';

const apiKey: string = environment.apiKey;
//console.log(environment.apiUrl +'='+ environment.apiKey);

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient ) { }  


// Let's call current weather with GET method 
  getCurrentWeather(loc: string) {
      return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}`)
  }
}

