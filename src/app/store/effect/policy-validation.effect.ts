import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PolicyValidationActions, ResetPolicyNumberSuccessAction } from '../action/policy-validation.action';

@Injectable()
export class PolicyValidationEffect {
  constructor(private _action$: Actions){}

  @Effect()
  resetPolicyNumber$: Observable<Action> = this._action$.pipe(
    ofType(PolicyValidationActions.RESET_POLICY_NUMBER),
    map(() => new ResetPolicyNumberSuccessAction({isAuthenticated: false, policyNumber: ''}))
  );
}