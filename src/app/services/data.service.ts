import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getBanners() {  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('mobile:bnbq637KtTu8NQqm4PW8TYCvoGuBEsqqvAWfMzNL')
      })
    };
    return this.http.get('https://api.sabha.tv/v1/getbanners', httpOptions); 
  }

  getHomeVideos() {  

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('mobile:bnbq637KtTu8NQqm4PW8TYCvoGuBEsqqvAWfMzNL')
      })
  };      
      return this.http.get('https://api.sabha.tv/v1/gethomevideos', options);
  }
}
