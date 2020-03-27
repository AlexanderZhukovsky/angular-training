import { Component, OnInit } from '@angular/core';

import { CommunicationService} from '../services/communication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public service: CommunicationService) { }

  ngOnInit() {
  }

}
