import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  name:string = '';
  lat:number = 0;
  lon:number = 0;

  temperature:number = 0;
  humidity:number = 0;

  constructor(private service:WeatherService) 
  {
    this.service.getCoord("londyn").subscribe(data => {
      console.log(data);
      this.name = data[0].name;
      this.lat = data[0].lat;
      this.lon = data[0].lon;

      this.service.getWeather(this.lat,this.lon).subscribe(data =>{

      this.temperature = data[0].temperature;
      this.humidity = data[0].humidity;
      });

     
    });
  }

  ngOnInit(): void {
  }

}
