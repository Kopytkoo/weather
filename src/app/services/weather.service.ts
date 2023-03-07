import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) 
  { 
    
  }

  getCoord(city:string)
  {
  return this.http.get<any>(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&      appid=3cd37c003ab6ca915bf59bb48ff006eb`);
  }
  getWeather(lat:number,lon:number)
  {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3cd37c003ab6ca915bf59bb48ff006eb`)
  }
}
