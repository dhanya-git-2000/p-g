import React, { useState } from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import { menu2 } from './constants';


function Failover() {
    const [showGrid, SetShowGrid] = useState(false);
    const handleGrid = () => {
        SetShowGrid(!showGrid);
    }
    return (
        <div>
            <div className='content'>
                {/* <div className='content-header-right'>
            <p>Logged out on:</p>
            <RiLayoutGridFill />
          </div> */}

                <div>
                    {menu2.map((menuItem, index) => (
                        <div key={index}>
                            <div className='content-header-container'>
                                <p className='content-header'><strong style={{ color:"black"}}>{menuItem.name}</strong></p>
                            </div>
                            <table className='employee-table' >
                                <thead>
                                    <tr className='table-header'>
                                        {menuItem.table_name.map((item, subIndex) => (
                                            <th key={subIndex}>{item.name}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {menuItem.table_data.map((row, rowIndex) => (
                                        <tr key={rowIndex}>

                                            <td>{row.Source}</td>
                                            <td>{row.Target}</td>
                                            <td>{row.Last_performed_on}</td>
                                            <td>{row.number_of_times_performed}</td>
                                            <td>{row.last_performed_by}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}
export default Failover;