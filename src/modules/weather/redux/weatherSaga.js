import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { weatherApi } from "../../../services/api/weatherApi";
import { weatherActions } from "./weatherSlice";

function* handleFetchWeather(action) {
  try {
    weatherActions.weatherFetchAction();
    console.log(action);
    const res = yield call(weatherApi.fetchWeather, action.location);
    yield put(weatherActions.weatherFetchSuccess(res.data));
  } catch (error) {
    yield put(weatherActions.weatherFetchError());
  }
}

export default function* weatherSaga() {
  yield takeLatest("FETCH_WEATHER", handleFetchWeather);
}
