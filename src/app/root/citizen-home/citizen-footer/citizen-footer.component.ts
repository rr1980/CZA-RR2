import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'cza-citizen-footer',
  templateUrl: './citizen-footer.component.html',
  styleUrls: ['./citizen-footer.component.scss']
})
export class CitizenFooterComponent{

  constructor(private apiService: ApiService) { }

  
  onClickTest() {
    console.debug(window.innerWidth);
    this.apiService.onTest();
  }
}
