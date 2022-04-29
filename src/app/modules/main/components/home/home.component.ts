import { Component, OnInit } from '@angular/core';
import { PigesAuthService } from '@piges/auth-angular';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class EneasysAccountHomeComponent implements OnInit {
	constructor(
		private pigesAuthService: PigesAuthService,
	) {}

	userLoading = true;
	userInfo: any = {};

	ngOnInit(): void {
		this.loadUser();
	}

	async loadUser() {
		try {
			this.userInfo = await this.pigesAuthService.getUser();
		} catch(e) { } finally {
			this.userLoading = false;
		}
	}

}