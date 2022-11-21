import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PigesAuthGuard } from '@piges/auth-angular';
import { Page404Component } from './core/layout/components/page-404/page-404.component';
import { EneasysConsolePageComponent } from './core/layout/components/page/page.component';
import { UserHomeComponent } from './modules/user-account/components/user-home/user-home.component';


const routes: Routes = [
	{
		path: '',
		canActivate : [
			PigesAuthGuard
		],
		component: UserHomeComponent,
	},
	{
        path: 'piges-module',
		component  : EneasysConsolePageComponent,
		//data: { layout: 'test' },
		canActivate : [
			PigesAuthGuard
		],
        children   : [
            {path: '', loadChildren: () => import('src/app/modules/piges-module-manager/piges-module-manager.module').then(m => m.PigesModuleManagerModule)},
        ]
    },
	{
        path: 'piges-organization',
		component  : EneasysConsolePageComponent,
		canActivate : [
			PigesAuthGuard
		],
        children   : [
            {path: '', loadChildren: () => import('src/app/modules/piges-organization-adm/piges-organization-adm.module').then(m => m.PigesOrganizationAdmModule)},
        ]
    },
	{
		path: '**',
		pathMatch: 'full', 
        component: Page404Component,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
