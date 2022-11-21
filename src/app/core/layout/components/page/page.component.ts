import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class EneasysConsolePageComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		//console.log(this.route.snapshot.data);
	}
}
