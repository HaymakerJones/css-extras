import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimming',
  templateUrl: './dimming.component.html',
  styleUrls: ['./dimming.component.css']
})
export class DimmingComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
  }

}
