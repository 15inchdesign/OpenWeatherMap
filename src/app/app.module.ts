import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Material Modules
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, 
         MatExpansionModule, 
         MatDividerModule, 
         MatListModule } from '@angular/material';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Weather store
import { locationReducer } from './location-store';
import { StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForcastComponent } from './forcast/forcast.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CurrentWeatherComponent,
    ForcastComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     // Material modules
     MatToolbarModule,
     MatExpansionModule,
     MatListModule,
     MatDividerModule,
    StoreModule.forRoot({ loc: locationReducer })
  
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
