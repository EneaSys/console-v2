import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { Pagina2Component } from './component/pagina-2/pagina-2.component';
import { RegistrationStep1Component } from './component/registration-step-1/registration-step-1.component';
import { Pagina1Component } from './component/pagina-1/pagina-1.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [
		BrowserModule,
		RouterModule,

		InputTextModule,
		FormsModule,
		ReactiveFormsModule,
		PasswordModule,
		ButtonModule,
		CardModule,
		BrowserAnimationsModule,
		FlexLayoutModule

	],
	declarations: [
		Pagina1Component,
		Pagina2Component,
		RegistrationStep1Component,


	],
	exports: [
		Pagina1Component,
		Pagina2Component,
		RegistrationStep1Component,


	],
	providers: [


	],
})
export class RegistrationModule { }
