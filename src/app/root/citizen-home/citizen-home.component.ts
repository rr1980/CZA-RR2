import { Component, OnInit } from '@angular/core';
import { CitizenService } from './citizen.service';
@Component({
  selector: 'cza-citizen-home',
  templateUrl: './citizen-home.component.html',
  styleUrls: ['./citizen-home.component.scss']
})
export class CitizenHomeComponent implements OnInit {

  constructor(public cs: CitizenService) { }

  ngOnInit() {

  }
}
