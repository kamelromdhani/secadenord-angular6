import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    
  private _url: string = "http://localhost:8081/javaAPI/rest/seca/tableNiveau";
  private _url2: string = "http://localhost:8081/javaAPI/rest/seca/tableDebit";
private _url4: string = "/assets/data/totalisateurCourbe.json";
  private _amonturl: string = "/assets/data/courbeAmont.json";
  private _avalurl: string = "http://localhost:8081/javaAPI/rest/seca/courbeAval/{IDBOITIER}/{DATEDEBUT}/{DATEFIN}";
private _avalurl2: string = "/assets/data/CourbeAval2.json";
private _amonturl2: string = "/assets/data/courbeAmont2.json";
  constructor(private http: HttpClient) { }
  LoadNiveau(){
    
    return this.http.get(this._url);
  }
  LoadDebit(){
    
    return this.http.get(this._url2);
  }
  LoadTotalisateur(url: string){
          return this.http.get(url);
      
    }
  LoadTotals(url: string){
      
      return this.http.get(url);
    }
  LoadAvalData(url: string){
          
          return this.http.get(url);
  }
  
  
}
