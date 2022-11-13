import { takeLatest } from "redux-saga/effects";
import { REGISTER_USER } from "../actionType";
import { handleUserRegistration } from "./UserSaga";

export default function* rootSaga() {
  yield takeLatest(REGISTER_USER, handleUserRegistration);
}
