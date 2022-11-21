import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'escc-left-menu',
	templateUrl: './left-menu.component.html',
	styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
	constructor() { }

	items: MenuItem[] = [
		{
			label: 'Home',
			icon: 'pi pi-fw pi-plus',
			routerLink: "/"
		},
		{
			label: 'Piges Organization',
			icon: 'pi pi-fw pi-download',
			routerLink: "/piges-organization"
		},
		{
			label: 'Piges Module',
			icon: 'pi pi-fw pi-download',
			routerLink: "/piges-module"
		},
	];

	ngOnInit(): void { }
}
