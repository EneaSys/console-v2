import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

import { ModuleManagerMainComponent } from './components/module-manager-main/module-manager-main.component';
import { ModuleListPageComponent } from './components/list-page/list-page.component';

export const pigesModuleManagerRoutes: Route[] = [
    {
        path		: '',
		redirectTo	: 'manager'
    },
	{
        path		: 'manager',
        component	: ModuleManagerMainComponent,
		children	: [
			{
				path		: '',
				redirectTo	: 'status'
			},
			{
				path		: 'status',
				component	: ModuleListPageComponent,
			},
			{
				path		: 'customizer',
				component	: ModuleListPageComponent,
			},
			{
				path		: 'dbm',
				component	: ModuleListPageComponent,
			},
			{
				path		: 'licenze',
				component	: ModuleListPageComponent,
			},
			{
				path		: 'tenancy',
				component	: ModuleListPageComponent,
			},
		]
    }
];

@NgModule({
	imports: [
		RouterModule.forChild(pigesModuleManagerRoutes),
		CommonModule,
		
		FlexLayoutModule,

		ButtonModule,
		CardModule,
		MegaMenuModule,
		
	],
	providers: [

	],
	declarations: [
		ModuleManagerMainComponent,
		ModuleListPageComponent,

	],
	exports: [
		
	],
})
export class PigesModuleManagerModule {}