import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../data.service';
import {Chart} from 'Chart.js';
@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css'] 
})
export class NiveauComponent implements OnInit {
  
  chart = [];
  lieu= '';
  AllNiveau: any = [];
  AllCourbes: any = [];
  AllAmont: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateDebut: Date;
  dateFin: Date;
  
  LoadChart(IDBOITIER: string, dateDebut: string, dateFin: string){
     const Avalurl: string ="http://localhost:8081/javaAPI/rest/seca/courbeNiveau/"+IDBOITIER+"/"+dateDebut+"/"+dateFin;   
      this.dataservice.LoadAvalData(Avalurl).subscribe(result =>{
          this.AllCourbes= result;
          this.chart = new Chart('LineChart', {
              // The type of chart we want to create
              
                  type: 'line',
                  data: {
                      datasets: [{
                          label: 'Aval',
                          backgroundColor: 'rgba(54, 162, 235, 0.2)',
                          borderColor: 'rgba(54, 162, 235, 1)',
                          fill: false,
                          data: this.AllCourbes.aval,
                      }, {
                          label: 'Amont',
                          backgroundColor: 'rgba(255, 99, 132, 0.2)',
                          borderColor: 'rgba(255,99,132,1)',
                          fill: false,
                          data: this.AllCourbes.amont
                      }]
                  },
                  options: {
                      responsive: true,
                      title: {
                          display: true,
                          text: 'Chart.js Time Point Data'
                      },
                      scales: {
                          xAxes: [{
                              type: 'time',
                              display: true,
                              scaleLabel: {
                                  display: true,
                                  labelString: 'Date'
                              },
                              ticks: {
                                  major: {
                                      fontStyle: 'bold',
                                      fontColor: '#FF0000'
                                  }
                              }
                          }],
                          yAxes: [{
                              display: true,
                              scaleLabel: {
                                  display: true,
                                  labelString: 'value'
                              }
                          }]
                      }
                  }
              });
          console.log(this.AllCourbes);
        });
     
  }
  constructor(private dataservice: DataService){
    
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    this.dataservice.LoadNiveau().subscribe(result =>{
      this.AllNiveau= result;
      this.dtTrigger.next();
      console.log(this.AllNiveau);
    });
    
  }

}
