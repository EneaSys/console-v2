import { Component, OnInit } from '@angular/core';
import { OrganizationDTO, OrganizationResourceService } from 'piges-dna';

@Component({
	templateUrl: './organization-list-page.component.html',
	styleUrls: ['./organization-list-page.component.scss']
})
export class OrganizationListPageComponent implements OnInit {
	constructor(
		private organizationResourceService: OrganizationResourceService,
	) { }

	organization: OrganizationDTO[] = [];

	ngOnInit(): void {
		this.get();
	}

	async get() {
		try {
			this.organization = await this.organizationResourceService.getAllOrganizationsUsingGET({}).toPromise();
		} catch (error) {
			
		}
		
	}
}
