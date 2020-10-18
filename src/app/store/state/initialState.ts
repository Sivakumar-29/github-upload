import { PolicyValidation } from '../../model/policy-validation.model';
import { PolicyValidationState } from './policy-validation.state';

export class AppState {
  policyValidation: PolicyValidation;
}

export const initialState = <AppState> {
    policyValidation: PolicyValidationState
};