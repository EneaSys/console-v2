import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';

import { Page404Component} from './components/page-404/page-404.component'
import { EneasysConsolePageComponent} from './components/page/page.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@NgModule({
	imports: [ 
		CommonModule,
		RouterModule,

		FlexLayoutModule,
		BrowserAnimationsModule,

		ButtonModule,
		ToolbarModule,
		CardModule,
		MenuModule,

	],
	declarations: [
		Page404Component,
		EneasysConsolePageComponent,
		ToolbarComponent,
		LeftMenuComponent,

	],
	exports: [
		Page404Component,
		EneasysConsolePageComponent,

	],
})
export class EneasysAccountLayoutModule {}