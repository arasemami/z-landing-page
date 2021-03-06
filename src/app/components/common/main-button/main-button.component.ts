import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Input() bgColor: string;


  constructor() { }

  ngOnInit() {
  }

}
