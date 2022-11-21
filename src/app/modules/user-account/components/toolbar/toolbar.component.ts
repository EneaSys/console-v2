import { Component, OnInit } from '@angular/core';
import { PigesAuthService } from '@piges/auth-angular';
import { APP_URL } from 'src/app/app.constants';

@Component({
	selector: 'ea-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class UserToolbarComponent {
	constructor(
		private pigesAuthService: PigesAuthService,
	) { }

	userInfo: any = {};

	ngOnInit(): void {
		this.loadUser();
	}

	async loadUser() {
		this.userInfo = await this.pigesAuthService.getUser();
	}

	async logout() {
		await this.pigesAuthService.logout(APP_URL);
		window.location.href = "https://account.eneasys.com/logout";
	}
}
