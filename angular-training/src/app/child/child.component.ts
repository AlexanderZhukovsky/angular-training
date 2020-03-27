import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { CommunicationService} from '../services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(public service: CommunicationService) { }

  @Input() title: string;
  @Output() tick = new EventEmitter<object>();

  ngOnInit() {
  }

  handleTick() {
    this.service.data = 'Icecream';
    this.tick.emit({
      label: this.service.data
    });
  }

}
