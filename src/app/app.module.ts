import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Material Modules
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, 
         MatExpansionModule, 
         MatDividerModule, 
         MatListModule,
         MatCardModule,
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule } from '@angular/material';

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
import { TopBarComponent } from './top-bar/top-bar.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CurrentWeatherComponent,
    TopBarComponent,
    ForecastComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
     // Material modules
     MatToolbarModule,
     MatExpansionModule,
     MatListModule,
     MatDividerModule,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
    StoreModule.forRoot({ loc: locationReducer })
  
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
