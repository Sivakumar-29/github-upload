import { Action } from '@ngrx/store';
import { PolicyValidation } from '../../model/policy-validation.model';

export enum PolicyValidationActions {
  VALIDATION_POLICY = 'VALIDATE POLICY',

  VALIDATION_POLICY_SUCCESS = 'VALIDATE POLICY SUCCESS',

  VALIDATION_POLICY_FAILURE = 'VALIDATION POLICY FAILURE',

  RESET_POLICY_NUMBER = 'RESET POLICY NUMBER',

  RESET_POLICY_NUMBER_SUCCESS = 'RESET POLICY NUMBER SUCCESS',

  RESET_POLICY_NUMBER_FAILURE = 'RESET POLICY NUMBER FAILURE',
}

export class ValidatePolicyAction implements Action {
  readonly type: string = PolicyValidationActions.VALIDATION_POLICY;

  constructor(public payload: Partial<PolicyValidation>) {}
}

export class ValidatePolicySuccessAction implements Action {
  readonly type: string = PolicyValidationActions.VALIDATION_POLICY_SUCCESS;

  constructor(public payload: Partial<PolicyValidation>) {}
}

export class ValidatePolicyFailureAction implements Action {
  readonly type: string = PolicyValidationActions.VALIDATION_POLICY_FAILURE;
}

export class ResetPolicyNumberAction implements Action {
  readonly type: string = PolicyValidationActions.RESET_POLICY_NUMBER;
}

export class ResetPolicyNumberSuccessAction implements Action {
  readonly type: string = PolicyValidationActions.RESET_POLICY_NUMBER_SUCCESS;

  constructor(public payload: Partial<PolicyValidation>) {}
}

export class ResetPolicyNumberFailureAction implements Action {
  readonly type: string = PolicyValidationActions.RESET_POLICY_NUMBER_FAILURE;
}

export type ValidatePolicyActionType =
    ValidatePolicyAction |
    ValidatePolicySuccessAction |
    ValidatePolicyFailureAction |
    ResetPolicyNumberAction |
    ResetPolicyNumberSuccessAction |
    ResetPolicyNumberFailureAction;