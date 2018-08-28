import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {Chart} from 'Chart.js';
@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {

  AllDebit: any = [];
AllCourbes: any = [];
chart = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
LoadChart(IDBOITIER: string, dateDebut: string, dateFin: string){
    const url: string ="http://localhost:8081/javaAPI/rest/seca/courbeDebit/"+IDBOITIER+"/"+dateDebut+"/"+dateFin;   
     this.dataservice.LoadAvalData(url).subscribe(result =>{
         this.AllCourbes= result;
         this.chart = new Chart('LineChart', {
             // The type of chart we want to create
             
                 type: 'line',
                 data: {
                     datasets: [{
                         label: 'Debimetre 1',
                         backgroundColor: 'rgba(54, 162, 235, 0.2)',
                         borderColor: 'rgba(54, 162, 235, 1)',
                         fill: false,
                         data: this.AllCourbes.courb1,
                     }, {
                         label: 'Debimetre 2',
                         backgroundColor: 'rgba(255, 99, 132, 0.2)',
                         borderColor: 'rgba(255,99,132,1)',
                         fill: false,
                         data: this.AllCourbes.courb2
                     }, {
                         label: 'Debimetre 3',
                         backgroundColor: 'rgba(164, 64, 77, 0.2)',
                         borderColor: 'rgba(164, 64, 77, 1)',
                         fill: false,
                         data: this.AllCourbes.courb3
                     }, {
                         label: 'Debimetre 4',
                         backgroundColor: 'rgba(0, 244, 228, 0.2)',
                         borderColor: 'rgba(0, 244, 228,1)',
                         fill: false,
                         data: this.AllCourbes.courb4
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
      pageLength: 6
    };
    
    this.dataservice.LoadDebit().subscribe(result =>{
      this.AllDebit= result;
      this.dtTrigger.next();
    });
  }

}
