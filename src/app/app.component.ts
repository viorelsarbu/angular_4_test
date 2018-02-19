import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  rows = [];
  temp = [];


  columns = [
    { name: 'Id' },
    { name: 'Name' },
    { name: 'Description' },
    { name: 'Date' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/task.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      this.rows = data.tableData;
      this.temp = data.tableData;
    };

    req.send();
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function(d) {

      //date fix
      const now = new Date(d.date);
      const year = '' + now.getFullYear();
      let month = '' + (now.getMonth() + 1); if (month.length == 1) { month = '0' + month; }
      let day = '' + now.getDate(); if (day.length == 1) { day = '0' + day; }
      let hour = '' + now.getHours(); if (hour.length == 1) { hour = '0' + hour; }
      let minute = '' + now.getMinutes(); if (minute.length == 1) { minute = '0' + minute; }
      let second = '' + now.getSeconds(); if (second.length == 1) { second = '0' + second; }
      let date =  year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;


      return d.name.toLowerCase().indexOf(val) !== -1 || d.id.toString().toLowerCase().indexOf(val) !== -1 || d.description.toLowerCase().indexOf(val) !== -1 || date.toString().toLowerCase().indexOf(val) !== -1 || !val ;
    });

    this.rows = temp;
  }


}
