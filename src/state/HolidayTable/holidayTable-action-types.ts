import { ICountryCheckbox, IHolidayPlace, ITimeRange } from "./holidayTable-reducer";

export enum holidayTableActionType{
    ADDTABLE="ADD_HOLIDAY_TABLE",
    COUNTRYLIST="ADD_COUNTRY_LIST",
    FILTERCOUNTRYLIST="FILTER_COUNTRY_LIST",
    ADDDATES="ADD_DATES",
}

interface IAddTableData{
    type: holidayTableActionType.ADDTABLE,
    payload:IHolidayPlace
}

interface IAddDates{
    type: holidayTableActionType.ADDDATES,
    payload:ITimeRange
}

interface ICountryList{
    type: holidayTableActionType.COUNTRYLIST,
    payload:ICountryCheckbox[]
}

interface IFilterCountryList{
    type: holidayTableActionType.FILTERCOUNTRYLIST,
    payload:ICountryCheckbox
}

export type Action = IAddTableData  | IAddDates | ICountryList | IFilterCountryList;