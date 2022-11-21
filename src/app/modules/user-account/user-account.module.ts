import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

import { UserToolbarComponent } from './components/toolbar/toolbar.component'
import { UserHomeComponent } from './components/user-home/user-home.component'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	imports: [
		CommonModule,

		RouterModule,
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