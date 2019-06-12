//Import Combine Reducers
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DogReducer from './DogReducer';

//Combine Reducers
export default combineReducers({
    app: DogReducer,
    form: formReducer
});
