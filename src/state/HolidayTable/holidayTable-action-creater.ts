import { holidayTableActionType , Action } from "./holidayTable-action-types"
import {Dispatch} from 'redux'
import { ICountryCheckbox, IHolidayPlace, ITimeRange } from "./holidayTable-reducer"

export const addTableData = (table:IHolidayPlace) => (dispatch:Dispatch<Action>) =>{
    dispatch({
        type:holidayTableActionType.ADDTABLE,
        payload:table
    })
}

export const addDates = (dateRange:ITimeRange) => (dispatch:Dispatch<Action>) =>{
    dispatch({
        type:holidayTableActionType.ADDDATES,
        payload:dateRange
    })
}

export const addCountryList = (countryList:ICountryCheckbox[]) => (dispatch:Dispatch<Action>) =>{
    dispatch({
        type:holidayTableActionType.COUNTRYLIST,
        payload:countryList
    })
}

export const filterCountryList = (country:ICountryCheckbox) => (dispatch:Dispatch<Action>) =>{
    dispatch({
        type:holidayTableActionType.FILTERCOUNTRYLIST,
        payload:country
    })
}