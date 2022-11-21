import { Component, OnInit } from '@angular/core';
import { OrganizationResourceService } from 'piges-dna';
import { MegaMenuItem } from 'primeng/api';

@Component({
	templateUrl: './module-manager-main.component.html',
	styleUrls: ['./module-manager-main.component.scss']
})
export class ModuleManagerMainComponent implements OnInit {
	constructor(
		
	) { }

	items: MegaMenuItem[] = [
		{
			label:		'Status',
			icon:		'pi pi-fw pi-video',
			routerLink:	'status',
		},
		{
			label:		'Customizer',
			icon:		'pi pi-fw pi-video',
			routerLink:	'customizer',
		},
		{
			label:		'DBM',
			icon:		'pi pi-fw pi-users',
			routerLink:	'dbm',
		},
		{
			label:		'Licenze',
			icon:		'pi pi-fw pi-calendar',
			routerLink:	'licenze',
		},
		{
			label: 		'Tenancy',
			icon: 		'pi pi-fw pi-cog',
			routerLink:	'tenancy',
		}
	]

	ngOnInit(): void {
		
	}
}
