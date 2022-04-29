import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PigesAuthGuard } from '@piges/auth-angular';
import { Page404Component } from './core/layout/components/page-404/page-404.component';
import { EneasysAccountHomeComponent } from './modules/main/components/home/home.component';
import { RegistrationStep1Component } from './modules/registration/component/registration-step-1/registration-step-1.component';
import { UserHomeComponent } from './modules/user-account/components/user-home/user-home.component';


const routes: Routes = [
	{
		path: '',
		component: EneasysAccountHomeComponent,
	},
	{
		path: 'register',
		component: RegistrationStep1Component,
	},
	{
		path: 'my',
		canActivate : [
			PigesAuthGuard
		],
		component: UserHomeComponent,
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
