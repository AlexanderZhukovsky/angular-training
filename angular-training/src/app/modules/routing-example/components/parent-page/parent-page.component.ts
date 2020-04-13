import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-parent-page',
    templateUrl: './parent-page.component.html',
    styleUrls: ['./parent-page.component.scss']
})
export class ParentPageComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    public goToFirstChildPage(): void {
        this.router.navigate(['./first-child-page'], { relativeTo: this.activatedRoute});
    }

    public goToSecondChildPage(): void {
        const userId = 15;
        this.router.navigate(
            ['./second-child-page', userId],
            {
                relativeTo: this.activatedRoute,
                queryParams: {
                    title: 'Hello World',
                    date: new Date()
                }
            }
        );
    }
}
