import { all, call, put, takeEvery } from 'redux-saga/effects';
import firebase from 'firebase';
import axios from 'axios';
import { 
    loginSuccess, 
    loginfailed, 
    registerSuccess, 
    registerFailed,
    lookupSuccess,
    lookupFailed,
    searchSuccess,
    searchFailed,
    wikiSearchSuccess,
    wikiSearchFailed 
} from '../actions';
import { 
    LOGIN_SUBMITTED, 
    REGISTER_SUBMITTED,
    LOOKUP_REQUEST, 
    SEARCH_SUBMITTED,
    WIKI_SEARCH_SUBMITTED
} from '../actions/types';

/* WORKER SAGA LOGIN
*  A new task on each ACTION 
*  Worker saga: makes the api call when watcher saga sees the action
*  MAKE API CALL AND RETURN RESPONSE
*/
export function* fetchUserLoginAsync(action) {
    try {
        const auth = firebase.auth();
        //make request API 
        const response = yield call([
            auth, auth.signInWithEmailAndPassword
        ], action.form.email, action.form.password);
        // dispatch a success action to the store with the new login
        yield put(loginSuccess(response));
    } catch (e) {
        console.log(e.message);
        // dispatch a failure action to the store with the error
        yield put(loginfailed('Authentication Failed!'));
    }
}


/**
* WATCHER SAGA LOGIN
* 
* watcher saga: watches for actions dispatched to the store, starts worker saga
*/
export function* watchLoginUser() {
    //pass two arguments Action Name and will call our worker saga
    yield takeEvery(LOGIN_SUBMITTED, fetchUserLoginAsync);
}


/* WORKER SAGA Register
*  A new task on each ACTION 
*  Worker saga: makes the api call when watcher saga sees the action
*  MAKE API CALL AND RETURN RESPONSE
*/
export function* fetchUserRegisterAsync(action) {
    try {
        const auth = firebase.auth();
        //make request API 
        const response = yield call([
            auth, auth.signInWithEmailAndPassword
        ], action.form.email, action.form.password);
        // dispatch a success action to the store with the new Register
        yield put(registerSuccess(response));
    } catch (e) {
        console.log(e.message);
        // dispatch a failure action to the store with the error
        yield put(registerFailed('Authentication Failed!'));
    }
}


/**
* WATCHER SAGA Register
* 
* watcher saga: watches for actions dispatched to the store, starts worker saga
*/
export function* watchRegisterUser() {
    //pass two arguments Action Name and will call our worker saga
    yield takeEvery(REGISTER_SUBMITTED, fetchUserRegisterAsync);
}

/* WORKER SAGA Lookup
*  A new task on each ACTION 
*  Worker saga: makes the api call when watcher saga sees the action
*  MAKE API CALL AND RETURN RESPONSE
*/
export function* fetchRequestListAsync() {
    try {
        //make request API 
        const response = yield call(axios.get, 'https://dog.ceo/api/breeds/list/all');
        // dispatch a success action to the store with the new Register
        yield put(lookupSuccess(response.data.message));
    } catch (e) {
        console.log(e.message);
        // dispatch a failure action to the store with the error
        yield put(lookupFailed('Unable to received Dog list'));
    }
}

/**
* WATCHER SAGA Lookup
* 
* watcher saga: watches for actions dispatched to the store, starts worker saga
*/
export function* watchLookup() {
    //pass two arguments Action Name and will call our worker saga
    yield takeEvery(LOOKUP_REQUEST, fetchRequestListAsync);
}


/* WORKER SAGA SEARCH
*  A new task on each ACTION 
*  Worker saga: makes the api call when watcher saga sees the action
*  MAKE API CALL AND RETURN RESPONSE
*/
export function* fetchSearchImagesAsync(action) {
    try {
        //make request API 
        const response = yield call(axios.get, 'https://dog.ceo/api/breed/' + action.keyword + '/images');
        // dispatch a success action to the store with the new Register
        yield put(searchSuccess(response.data.message));
    } catch (e) {
        console.log(e.message);
        // dispatch a failure action to the store with the error
        yield put(searchFailed('Unable to received Dog list'));
    }
}

/**
* WATCHER SAGA SEARCH
* 
* watcher saga: watches for actions dispatched to the store, starts worker saga
*/
export function* watchSearchImages() {
    //pass two arguments Action Name and will call our worker saga
    yield takeEvery(SEARCH_SUBMITTED, fetchSearchImagesAsync);
}

/* WORKER SAGA Wiki SEARCH 
*  A new task on each ACTION 
*  Worker saga: makes the api call when watcher saga sees the action
*  MAKE API CALL AND RETURN RESPONSE
*/
export function* fetchWikiSearchAsync(action) {
    try {
        //make request API 
        const response = yield call(axios.get, 'https://en.wikipedia.org/api/rest_v1/page/related/' + action.keyword);
        // dispatch a success action to the store with the new Register
        yield put(wikiSearchSuccess(response.data));
    } catch (e) {
        console.log(e.message);
        // dispatch a failure action to the store with the error
        yield put(wikiSearchFailed('Unable to received wiki list'));
    }
}

/**
* WATCHER SAGA Wiki SEARCH
* 
* watcher saga: watches for actions dispatched to the store, starts worker saga
*/
export function* watchWikiSearch() {
    //pass two arguments Action Name and will call our worker saga
    yield takeEvery(WIKI_SEARCH_SUBMITTED, fetchWikiSearchAsync);
}

/**
* ROOT SAGA
* Root Saga Combine all our watcher sagas into one main root saga
*/
export default function* rootSaga() {
    yield all([
        watchLoginUser(),
        watchRegisterUser(),
        watchLookup(),
        watchSearchImages(),
        watchWikiSearch()
    ]);
}
