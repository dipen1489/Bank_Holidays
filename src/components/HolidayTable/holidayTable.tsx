import { useEffect } from 'react';
import './holidayTable.css';
import { bindActionCreators } from "redux"
import {useDispatch,useSelector} from 'react-redux'
import { RootState } from "../../state";
import axios from "axios";
import * as actionCreater from '../../state/HolidayTable/holidayTable-action-creater'
import { ICountryCheckbox } from '../../state/HolidayTable/holidayTable-reducer';
import moment from 'moment';

function HolidayTable() {

    const dispatch = useDispatch();
    const {addTableData , addCountryList} = bindActionCreators(actionCreater , dispatch);
    const holidayState = useSelector((state:RootState) => state.holidayTable);
  
    useEffect(() =>{
        axios.get('https://www.gov.uk/bank-holidays.json')
        .then(resp =>{
            let countryList:ICountryCheckbox[] = [];
            Object.keys(resp.data).map((countryName) =>{
                addTableData(resp.data[countryName]);
                countryList.push({name:resp.data[countryName].division,isChecked:true});
            })
            addCountryList(countryList);
        })
        .catch(err =>{
            console.log("error : ",err.message);
        })
    },[]);

    const filterTable = () =>{
        return holidayState.tableData.map((singleDivision) =>{
            for(let country of holidayState.countryList){
                if(singleDivision.division == country.name && country.isChecked == true){
                    return singleDivision.events.map((event, eventIndx) =>{
                        if(moment(event.date, 'YYYY-MM-DD').toDate().getTime() >= holidayState.dateRange.startDate
                        && moment(event.date, 'YYYY-MM-DD').toDate().getTime() <= holidayState.dateRange.endDate)
                            return <tr key={eventIndx}>
                                        <td className="holidayTable-td-style">{singleDivision.division}</td>
                                        <td className="holidayTable-td-style">{event.title}</td>
                                        <td className="holidayTable-td-style">{event.date}</td>
                                        <td className="holidayTable-td-style">{event.notes}</td>
                                        <td className="holidayTable-td-style">{event.bunting.toString()}</td>
                                    </tr>
                    });
                }
            } 
        })
    }

    return (
        <>
            <div className="holidayTable-container">
                <table className="holidayTable-table-style">
                    <thead>
                        <tr>
                            <th className="holidayTable-td-style">Country</th>
                            <th className="holidayTable-td-style">Title</th>
                            <th className="holidayTable-td-style">Date</th>
                            <th className="holidayTable-td-style">Notes</th>
                            <th className="holidayTable-td-style">Bunting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterTable()
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default HolidayTable;
