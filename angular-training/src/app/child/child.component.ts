import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Output() tick = new EventEmitter<object>();

  ngOnInit() {
  }

  handleTick() {
    this.tick.emit({
      label: 'Hello World!'
    });
  }

}
