import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-screen',
  templateUrl: './top-screen.component.html',
  styleUrls: ['./top-screen.component.scss']
})
export class TopScreenComponent implements OnInit {

  isVideoActive = false;

  constructor() { }

  ngOnInit() {
  }

  deletePhone(val) {
    this.isVideoActive = val;
  }



}
