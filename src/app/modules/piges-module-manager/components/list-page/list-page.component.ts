import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './list-page.component.html',
	styleUrls: ['./list-page.component.scss']
})
export class ModuleListPageComponent implements OnInit {
	constructor(
	) { }

	ngOnInit(): void {
		this.get();
	}

	async get() {
		try {
			
		} catch (error) {
			
		}
		
	}
}
