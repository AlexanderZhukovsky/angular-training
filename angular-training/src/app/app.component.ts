import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-training';
  navigationItems = [{
    label: 'Tour of Heroes',
    href: 'https://angular.io/tutorial'
  }, {
    label: 'CLI Documentation',
    href: 'https://angular.io/cli'
  }, {
    label: 'Angular blog',
    href: 'https://blog.angular.io/'
  }];

  onTick(eventArgs) {
    console.log(eventArgs);
  }
}
