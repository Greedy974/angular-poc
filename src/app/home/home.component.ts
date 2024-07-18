import { Component } from '@angular/core';
import {patientDatas} from './home-datas';

@Component({
  selector: 'uniq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  patient = patientDatas;
  
}
