import { takeLatest, all } from 'redux-saga/effects';
import API from '../services';

const api = API.create();

export default function* root() {
  yield all([
    // ------------------------- App Sagas

  ])
}
