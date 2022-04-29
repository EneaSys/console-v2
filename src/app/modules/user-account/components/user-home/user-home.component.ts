import { Component } from '@angular/core';
import { PigesAuthService } from '@piges/auth-angular';

@Component({
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
	constructor(
		private pigesAuthService: PigesAuthService,
	) {}

	userInfo: any = {};

	ngOnInit(): void {
		this.loadUser();
	}

	async loadUser() {
		this.userInfo = await this.pigesAuthService.getUser();
	}

}