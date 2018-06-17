import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transitions',
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.css']
})
export class TransitionsComponent implements OnInit {

  state = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.state = !this.state;
    console.log(this.state);
  }

}
