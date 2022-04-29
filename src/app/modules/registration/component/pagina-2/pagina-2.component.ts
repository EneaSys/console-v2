import { Component } from '@angular/core';
import { PigesAuthService } from '@piges/auth-angular';

@Component({
  selector: 'pagina-2-component',
  templateUrl: './pagina-2.component.html',
  styleUrls: ['./pagina-2.component.scss']
})
export class Pagina2Component {
	constructor(
		private pigesAuthService: PigesAuthService,
	) {}

	userInfo: any;

	ngOnInit(): void {
		this.loadUser();
	}

	async loadUser() {
		this.userInfo = await this.pigesAuthService.getUser();
	}

}