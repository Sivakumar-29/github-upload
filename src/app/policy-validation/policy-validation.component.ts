import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/state/initialState'
import { ValidatePolicyAction, ResetPolicyNumberAction } from '../store/action/policy-validation.action';
import { PolicyValidation } from '../model/policy-validation.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-policy-validation',
  templateUrl: './policy-validation.component.html',
  styleUrls: ['./policy-validation.component.scss']
})
export class PolicyValidationComponent implements OnInit {
  policyValidation$: Observable<any>;
  
  isValidPolicy: boolean;
  policyNumber: string;
  emailAddress: string;

  constructor(private _store: Store<AppState>) { 
    this.policyValidation$ = _store.select('policyValidation');
  }

  ngOnInit() {
    this.policyValidation$.subscribe((policyValidation) => {
      this.policyNumber = policyValidation.policyNumber;
      this.isValidPolicy = this.policyNumber && this.policyNumber != '';
      
      if (this.isValidPolicy){
        this.emailAddress='sample@test.com'
      }
    });
  }

  validatePolicyNumber(){
    this._store.dispatch(new ValidatePolicyAction(<PolicyValidation>{
      isAuthenticated: false,
      policyNumber: this.policyNumber
    }));
  }

  changePolicyNumber(){
    this._store.dispatch(new ResetPolicyNumberAction());
  }
}
