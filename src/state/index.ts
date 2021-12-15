import {combineReducers} from 'redux'
import holidayReducer from './HolidayTable/holidayTable-reducer';

const reducers = combineReducers({
    holidayTable: holidayReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>