import { Component, Input } from '@angular/core';
import { PatientInfos } from 'src/app/home/home-datas';

@Component({
  selector: 'uniq-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: PatientInfos | undefined;
}
