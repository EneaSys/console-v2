import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'registration-step-1-component',
	templateUrl: './registration-step-1.component.html',
	styleUrls: ['./registration-step-1.component.scss'],
})
export class RegistrationStep1Component implements OnInit {

	
	constructor(	
		private _formBuilder: FormBuilder,
	) { }

	registration: any;

	ngOnInit(): void {
		this.registration = this._formBuilder.group({
           name: [null, [Validators.required]],
		   lastName:[null, [Validators.required]],
		   email:[null, [Validators.required]],
		   password:[null, [Validators.required]],
		   confirmPassword:[null, [Validators.required]],
        });
	}

	
};


