import { useEffect, useState } from 'react';
import './filter.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { bindActionCreators } from "redux"
import {useDispatch,useSelector} from 'react-redux'
import { RootState } from "../../state";
import * as actionCreater from '../../state/HolidayTable/holidayTable-action-creater'
import { ITimeRange } from '../../state/HolidayTable/holidayTable-reducer';

function Filter() {

    const dispatch = useDispatch();
    const {addDates , filterCountryList} = bindActionCreators(actionCreater , dispatch);
    const holidayState = useSelector((state:RootState) => state.holidayTable);

    const [dateState, setDateState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 30),
            key: 'selection'
        }
    ]);
    
    useEffect(() =>{
        addDatesToState(dateState[0].startDate , dateState[0].endDate);
    },[]);

    const addDatesToState = (startDate:Date , endDate:Date) =>{
        let dates : ITimeRange = {
            startDate:startDate.getTime(),
            endDate:endDate.getTime()
        };
        addDates(dates);
    }

    const handleSelect = (ranges:any) => {
        setDateState([ranges.selection]);
        addDatesToState(ranges.selection.startDate , ranges.selection.endDate);
    }

    const handleOnCheck = (e: any) =>{
        filterCountryList({name:e.target.value,isChecked:e.target.checked})
    }

    return (
        <>
        <div className="filter-style">
            <h3 className="heading-style"> Date Filter</h3>
            <DateRangePicker
                className="date-picker-style"
                onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={dateState}
                direction="horizontal"
                />
            <h3 className="heading-style"> Country Filter</h3>
            <ul className="list-style">
                {
                    holidayState.countryList.map((country , index) =>{
                        return <li key={index} ><label htmlFor={country.name+index}><input id={country.name+index} type="checkbox" name={country.name} value={country.name} checked={country.isChecked} onChange={handleOnCheck} />{country.name}</label></li>
                    })
                }
            </ul>
        </div>
        </>
    );
}

export default Filter;
