import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { UserToolbarComponent } from './components/toolbar/toolbar.component'
import { UserHomeComponent } from './components/user-home/user-home.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';

@NgModule({
	imports: [
		CommonModule,

		FlexLayoutModule,

		ButtonModule,
		ToolbarModule,
		CardModule,
		
	],
	providers: [

	],
	declarations: [
		UserToolbarComponent,
		UserHomeComponent,

	],
	exports: [

	],
})
export class UserAccountModule {}