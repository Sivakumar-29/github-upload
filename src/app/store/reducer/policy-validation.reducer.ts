import { ValidatePolicyActionType, ValidatePolicySuccessAction, PolicyValidationActions, ResetPolicyNumberSuccessAction, ValidatePolicyAction } from '../action/policy-validation.action';

export function policyValidationReducer(state = {}, action: ValidatePolicyActionType){
  switch (action.type) {
    case PolicyValidationActions.VALIDATION_POLICY:
      return { ...state, ...(<ValidatePolicyAction>action).payload};
    case PolicyValidationActions.VALIDATION_POLICY_SUCCESS:
      return { ...state, ...(<ValidatePolicySuccessAction>action).payload};
    case PolicyValidationActions.VALIDATION_POLICY_SUCCESS:
      return { ...state, ...(<ResetPolicyNumberSuccessAction>action).payload};    
    default:
      return { state };
  }
}