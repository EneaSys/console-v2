import { NgModule } from '@angular/core';
import { PigesAuthModule, PIGES_CONFIG } from '@piges/auth-angular';
import { APP_URL } from 'src/app/app.constants';
import { PigesAuthLoginComponent, PigesAuthCallbackComponent } from '@piges/auth-angular';
import { RouterModule, Routes } from '@angular/router';
import { IPigesConfig } from '@piges/auth-angular/lib/interface/piges-config';

/*
const pigesConfig = {
	clientId: '128bmgj51ol95sokf4uopafs5r',
	redirectUrl: APP_URL + '/piges/auth/callback',
	idp_identifier: 'eneasys.com'
}*/
const pigesConfig: IPigesConfig  = {
	_serverUrl: 'https://eneasys.auth.eu-west-1.amazoncognito.com',
	_authorizeUrl: 'https://eneasys.auth.eu-west-1.amazoncognito.com',
	clientId: '5jkgg56luoku9q8vgdhalc3uaj',
	redirectUrl: APP_URL + '/piges/auth/callback'
}


const pigesAuthRoutes: Routes = [
	{
		path: 'piges/auth',
		children: [
			{
				path: 'login',
				component: PigesAuthLoginComponent,
			},
			{
				path: 'callback',
				component: PigesAuthCallbackComponent
			}
		]
	}
];

@NgModule({
	imports: [ 
		PigesAuthModule,
		RouterModule.forRoot(pigesAuthRoutes)
	],
	providers: [
		{ 
			provide: PIGES_CONFIG,
			useValue: pigesConfig 
		},
	],
})
export class EneasysAccountAuthModule {}