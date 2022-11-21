import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

import { OrganizationListPageComponent } from './components/organization-list-page/organization-list-page.component';

export const pigesOrganizationAdmRoutes: Route[] = [
    {
        path		: '',
		redirectTo	: 'list'
    },
	{
        path		: 'list',
        component	: OrganizationListPageComponent,
    }
];

@NgModule({
	imports: [
		RouterModule.forChild(pigesOrganizationAdmRoutes),
		CommonModule,
		
		FlexLayoutModule,

		ButtonModule,
		CardModule,
		MegaMenuModule,
		
	],
	providers: [

	],
	declarations: [
		OrganizationListPageComponent,

	],
	exports: [
		
	],
})
export class PigesOrganizationAdmModule {}