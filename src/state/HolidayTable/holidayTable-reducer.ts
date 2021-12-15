import { stat } from "fs";
import { Action , holidayTableActionType } from "./holidayTable-action-types";

const initialState = {
    tableData:[],
    countryList:[],
    dateRange:{
        startDate:0,
        endDate:0
    }
}

interface IHolidayTable{
    title:string,
    date:string,
    notes:string,
    bunting:string
}

export interface ITimeRange{
    startDate: number,
    endDate: number
}

export interface IHolidayPlace{
    division:string,
    events:IHolidayTable[]
}

export interface ICountryCheckbox{
    name:string,
    isChecked:boolean
}

export interface IHoliday{
    tableData: IHolidayPlace[],
    countryList: ICountryCheckbox[],
    dateRange:ITimeRange
}

const filterTableDataDateRange = (tableData : IHolidayPlace[] , filter : ITimeRange) =>{
    return tableData;
}

const holidayReducer = (state:IHoliday = initialState , action : Action) =>{
    switch(action.type)
    {
        case holidayTableActionType.ADDTABLE:
            state.tableData.push(action.payload)
            break;
        case holidayTableActionType.ADDDATES:
            state.dateRange = action.payload
            break;
        case holidayTableActionType.COUNTRYLIST:
            state.countryList = action.payload;
            break;
        case holidayTableActionType.FILTERCOUNTRYLIST:
            state.countryList.forEach((element)=>{
                if(element.name == action.payload.name){
                    element.isChecked = action.payload.isChecked;
                }
            });
            break;
    }
    return { ...state };
}

export default holidayReducer;