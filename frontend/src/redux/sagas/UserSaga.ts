import { call } from "redux-saga/effects";
import { user_registration } from "../network/api/User";

type OnboardingProps = {
  payload?: any;
  data?: any;
  type?: any;
  status?: any;
  error?: any;
  success?: any;
  loading?: any;
};

export function* handleUserRegistration(action: any) {
  const data: OnboardingProps = yield call(user_registration, action);
  if (data) {
    console.log(data, "Success SAGA");
  }
}
