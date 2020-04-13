import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-second-child-page',
    templateUrl: './second-child-page.component.html',
    styleUrls: ['./second-child-page.component.scss']
})
export class DynamicSecondChildPageComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .subscribe(params => console.log(params));

        this.route.queryParams
            .subscribe(queryParams => console.log(queryParams));
    }
}
