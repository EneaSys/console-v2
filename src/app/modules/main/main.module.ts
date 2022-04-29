import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule} from 'primeng/progressspinner';

import { EneasysAccountHomeComponent } from './components/home/home.component'
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,

		FlexLayoutModule,

		ButtonModule,
		ToolbarModule,
		CardModule,
		ProgressSpinnerModule,

	],
	declarations: [
		EneasysAccountHomeComponent,

	],
	exports: [

	],
})
export class MainModule {}