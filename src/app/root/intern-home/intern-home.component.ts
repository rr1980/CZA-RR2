import { Component, OnInit } from '@angular/core';
import { InternHomeService, Employee } from './intern-home.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'cza-intern-home',
  templateUrl: './intern-home.component.html',
  styleUrls: ['./intern-home.component.scss']
})
export class InternHomeComponent implements OnInit {


  constructor(service: InternHomeService) {
    this.dataSource = new DataSource({
        store: service.getData()
    });

    this.resourcesDataSource = service.getEmployees();
}


  ngOnInit() {
  }

  helloWorld() {
    
  }

  dataSource: any;
  currentDate: Date = new Date(2016, 7, 2, 11, 30);
  resourcesDataSource: Employee[];

  markWeekEnd(cellData) {
      function isWeekEnd(date) {
          var day = date.getDay();
          return day === 0 || day === 6;
      }
      var classObject = {};
      classObject["employee-" + cellData.groups.employeeID] = true;
      classObject['employee-weekend-' + cellData.groups.employeeID] = isWeekEnd(cellData.startDate)
      return classObject;
  }

  markTraining(cellData) {
      var classObject = {
          "day-cell": true
      }

      classObject[InternHomeComponent.getCurrentTraining(cellData.startDate.getDate(), cellData.groups.employeeID)] = true;
      return classObject;
  }

  static getCurrentTraining(date, employeeID) {
      var result = (date + employeeID) % 3,
          currentTraining = "training-background-" + result;

      return currentTraining;
  }
}
