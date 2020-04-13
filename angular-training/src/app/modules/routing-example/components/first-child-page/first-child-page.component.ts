import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-first-child-page',
    templateUrl: './first-child-page.component.html',
    styleUrls: ['./first-child-page.component.scss']
})
export class FirstChildPageComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }
    public firstName: string;
    public lastName: string;

    ngOnInit() {
        this.route.data
            .subscribe((data: { firstName: string, lastName: string }) => {
                this.firstName = data.firstName;
                this.lastName = data.lastName;
            });
    }

}
