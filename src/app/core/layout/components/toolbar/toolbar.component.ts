import { Component } from '@angular/core';
import { PigesAuthService } from '@piges/auth-angular';

@Component({
	selector: 'ea-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
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
		await this.pigesAuthService.logout("https://account.eneasys.com/logout");
	}
}
