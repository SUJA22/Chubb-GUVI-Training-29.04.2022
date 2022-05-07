import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() top_title="";
  @Input() price="";
  @Input() benefit_content:string[]=[];
  @Input() muted_content:string[]=[];
}
