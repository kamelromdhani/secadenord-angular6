import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {Chart} from 'Chart.js';
@Component({
  selector: 'app-totalisateur',
  templateUrl: './totalisateur.component.html',
  styleUrls: ['./totalisateur.component.css']
})
export class TotalisateurComponent implements OnInit {
    chart=[];
     obj = {
            "total1": [11145,14562,12654],
            "total2": [26655,15432,25445],
            "total3": [12364,45874,458963],
            "total4": [11111,123654,15485]
            };
   Alltotalisateurs: any = [];
    Alltotals: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
     modifierDate(dateMesure: string){
         const url="http://localhost:8081/javaAPI/rest/seca/tableTotal/"+dateMesure;
         this.dataservice.LoadTotalisateur(url).subscribe(result =>{
             this.Alltotalisateurs= result;
           });
         
     }
     
   LoadChart(IDBOITIER: number, dateDebut: Date, dateFin: Date){
       const url="http://localhost:8081/javaAPI/rest/seca/courbeTotal/"+IDBOITIER+"/"+dateDebut+"/"+dateFin
       this.dataservice.LoadTotals(url).subscribe(result =>{
           this.Alltotals= result;
           
           this.chart = new Chart('barChart', {
               type: 'bar',
               data: {
                   labels: this.Alltotals.labels,
                   datasets: [{
                       label: 'total1',
                       data: this.Alltotals.total1,
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                          
                       ],
                       borderColor: [
                           'rgba(255,99,132,1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           
                       ],
                       borderWidth: 1
                   },
                   {
                       label: 'total2',
                       data: this.Alltotals.total2,
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                          
                       ],
                       borderColor: [
                           'rgba(255,99,132,1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           
                       ],
                       borderWidth: 1
                   },
                   {
                       label: 'total3',
                       data: this.Alltotals.total3,
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                          
                       ],
                       borderColor: [
                           'rgba(255,99,132,1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           
                       ],
                       borderWidth: 1
                   },{
                       label: 'total4',
                       data: this.Alltotals.total4,
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                          
                       ],
                       borderColor: [
                           'rgba(255,99,132,1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           
                       ],
                       borderWidth: 1
                   }]
               },
               options: {
                   scales: {
                       yAxes: [{
                           ticks: {
                               beginAtZero:true
                           }
                       }]
                   }
               }
           });
         });
       
       
       
   }
     constructor(private dataservice: DataService){
    
  }
  ngOnInit(): void {
      let today = new Date();
      let dd= "";
      let mm="";
      let yyyy=today.getFullYear();
      if(today.getDate()<10)
              dd = '0'+today.getDate();
      else
              dd=''+today.getDate();
              
              
      if(today.getMonth()<10)
              mm = '0'+today.getMonth();
      else
              mm=''+today.getMonth();
              
      let date=yyyy+"-"+mm+"-"+dd;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    
    this.dataservice.LoadTotalisateur("http://localhost:8081/javaAPI/rest/seca/tableTotal/"+date).subscribe(result =>{
      this.Alltotalisateurs= result;
      this.dtTrigger.next();
    });
    
  }

}
