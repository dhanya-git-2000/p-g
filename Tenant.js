import React, { useState } from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { PiChartDonutFill } from "react-icons/pi";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, BarController, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { RadialBarChart, RadialBar, Tooltip, Cell } from "recharts";
import { ImTable2 } from "react-icons/im";
import { menu } from './constants';



function Tenant() {
  const [showType, setShowType] = useState("Grid");

  const handleTable = (e) => {
    setShowType(e.currentTarget.dataset.name);
  }
  const handleGrid = (e) => {
    setShowType(e.currentTarget.dataset.name);
  }

  const handleDonut = (e) => {
    setShowType(e.currentTarget.dataset.name);
  }
  const handleBar = (e) => {
    setShowType(e.currentTarget.dataset.name);
  }

  const colorsMap = {
    'Packages': '#40E0D0',        
    'Packages Backup': '#128999', 
    'Artifacts':'#FF6384' ,       
    'Credentials': '#FF8042',     
    'Global Variables': '#3CB371',
    'Number Ranges': '#36A2EB',   
  //   'Packages': '#FFABAB',           // Light coral
  // 'Packages Backup': '#FFC3A0',    // Light peach
  // 'Artifacts': '#FF677D',           // Light pinkish-red
  // 'Credentials': '#D9BF77',         // Light tan
  // 'Global Variables': '#6A0572',    // Soft violet
  // 'Number Ranges': '#A8DADC',       // Light teal

  };

  Chart.register(BarElement, CategoryScale, LinearScale, BarController, Legend, ChartDataLabels);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const fieldName = payload[0].payload.name; // Access the field name
      const fieldValue = payload[0].value; // Access the field value
      return (
        <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '10px' }}>
          <p style={{ margin: 0 }}>{`${fieldName}: ${fieldValue}`}</p>
          
        </div>
      );
    }
    return null;
  };

  return (
    <div className='content'>
      {/* <div className='content-header-right'>
            <p>Logged out on:</p>
            <RiLayoutGridFill />
          </div> */}
      <div>
        {showType == "Table" && (
          <div>
            {menu.map((menuItem, index) => (
              <div >
                <div className='content-header-container'>
                  <p className='content-header'><strong style={{ color: "black" }}>{menuItem.name}</strong></p>
                  <span>
                    <p className='content-header-right' ><RiLayoutGridFill data-name="Grid" onClick={handleGrid} /></p>
                    <p className='content-header-right' ><ImTable2 data-name="Table" onClick={handleTable} /></p>
                    <p className='content-header-right' > <PiChartDonutFill data-name="Donut" onClick={handleDonut} style={{ color: "black" }} /></p>
                    <p className='content-header-right' > <FaChartBar data-name="Bar" onClick={handleBar} style={{ color: "black" }} /></p>
                  </span>
                </div>
                <table className='employee-table' key={index}>
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

                        <td>{row.tenant_name}</td>
                        <td>{row.Package}</td>
                        <td>{row.Package_Backup}</td>
                        <td>{row.Artifact}</td>
                        <td>{row.Credential}</td>
                        <td>{row.Global_Variable}</td>
                        <td>{row.Number_Range}</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            ))}

          </div>
        )}
        {showType == "Grid" && (
          <div>
            {menu.map((menuItem, index) => (
              <div key={index}>
                <div className='content-header-container'>
                  <p className='content-header'><strong style={{ color: "black" }}>{menuItem.name}</strong></p>
                  <span>
                    <p className='content-header-right' ><RiLayoutGridFill data-name="Table" onClick={handleGrid} /></p>
                    <p className='content-header-right' ><ImTable2 data-name="Table" onClick={handleTable} /></p>
                    <p className='content-header-right' > <PiChartDonutFill data-name="Donut" onClick={handleDonut} style={{ color: "black" }} /></p>
                    <p className='content-header-right' > <FaChartBar data-name="Bar" onClick={handleBar} style={{ color: "black" }} /></p>
                  </span>

                  {/* <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {menuItem.table_data.map((row, rowIndex) => (
                    <div className="card text-bg-light mb-3" style={{ marginRight: '18px', width: '30%' }} key={rowIndex}>
                      <div className="card-body">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <div style={{ marginBottom: '5px' }}>
                           Tenant Name:<span className="table-data"> {row.tenant_name}</span>
                          </div>
                          <div style={{ marginBottom: '5px' }}>
                            Package:<span className="table-data">{row.Package}</span>
                          </div>
                          <div style={{ marginBottom: '5px' }}>
                            Package Backup:<span className="table-data"> {row.Package_Backup}</span>
                          </div>
                          <div style={{ marginBottom: '5px' }}>
                            Artifact: <span className="table-data">{row.Artifact}</span>
                          </div>
                          <div style={{ marginBottom: '5px' }}>
                            Credential: <span className="table-data">{row.Credential}</span>
                          </div>
                          <div style={{ marginBottom: '5px' }}>
                           Global Variable:<span className="table-data">{row.Global_Variable}</span>
                          </div>
                          <div style={{ marginBottom: '5px' }}>
                           Number Range:<span className="table-data">{row.Number_Range}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}
                </div>

                <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {menuItem.table_data.map((row, rowIndex) => (
                    <div className="card text-bg-light mb-4" style={{ margin: '10px', width: '30%', boxShadow: "6px 7px 5px lightblue", borderWidth: "2px", marginLeft: "1rem ", marginRight: "1rem" }} key={rowIndex}>
                      <div className="card-body">
                        <div className="data-grid" style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '7px',
                          alignItems: 'center',
                        }}>

                          <span className="table-name">Tenant Name:</span><span className="table-name">{row.tenant_name}</span>
                          Package: <span className="table-data">{row.Package}</span>
                          Package Backup: <span className="table-data">{row.Package_Backup}</span>
                          Artifact: <span className="table-data">{row.Artifact}</span>
                          Credential: <span className="table-data">{row.Credential}</span>
                          Global Variable:<span className="table-data">{row.Global_Variable}</span>
                          Number Range: <span className="table-data">{row.Number_Range}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {showType == "Bar" && (
          <div>
            {menu.map((menuItem, index) => (
              <div>
                <div className='content-header-container'>
                  <p className='content-header'><strong style={{ color: "black" }}>{menuItem.name}</strong></p>
                  <span>
                    <p className='content-header-right' ><RiLayoutGridFill data-name="Table" onClick={handleTable} /></p>
                    <p className='content-header-right' ><ImTable2 data-name="Table" onClick={handleTable} /></p>
                    <p className='content-header-right' > <PiChartDonutFill data-name="Donut" onClick={handleDonut} style={{ color: "black" }} /></p>
                    <p className='content-header-right' > <FaChartBar data-name="Bar" onClick={handleBar} style={{ color: "black" }} /></p>
                  </span>
                </div>
                <div style={{ maxWidth: "1000px" }} key={index}>
                  <div style={{ display: "flex", justifyContent: "center", marginLeft: "250px" }}>
                    <Bar
                      data={{
                        // Name of the variables on x-axies for each bar
                        labels: menuItem.table_data.map(row => row.tenant_name), // Tenant names as x-axis labels
                        datasets: [
                          {
                            label: 'Package',
                            data: menuItem.table_data.map(row => row.Package),
                            backgroundColor: 'aqua',
                            borderColor: 'aqua',
                            borderWidth: 1,
                          },
                          {
                            label: 'Package Backup',
                            data: menuItem.table_data.map(row => row.Package_Backup),
                            backgroundColor: 'green',
                            borderColor: 'green',
                            borderWidth: 1,
                          },
                          {
                            label: 'Artifact',
                            data: menuItem.table_data.map(row => row.Artifact),
                            backgroundColor: 'red',
                            borderColor: 'red',
                            borderWidth: 1,
                          },
                          {
                            label: 'Credential',
                            data: menuItem.table_data.map(row => row.Credential),
                            backgroundColor: 'yellow',
                            borderColor: 'yellow',
                            borderWidth: 1,
                          },
                          {
                            label: 'Global Variable',
                            data: menuItem.table_data.map(row => row.Global_Variable),
                            backgroundColor: 'purple',
                            borderColor: 'purple',
                            borderWidth: 1,
                          },
                          {
                            label: 'Number Range',
                            data: menuItem.table_data.map(row => row.Number_Range),
                            backgroundColor: 'orange',
                            borderColor: 'orange',
                            borderWidth: 1,
                          },
                        ],
                      }}
                      height={400}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            type: 'category', // Define x-axis as category
                          },
                          y: {
                            beginAtZero: true, // Ensure the y-axis starts at zero
                          },
                        },
                        plugins: {
                          legend: {
                            display: true,  // Ensure the legend is displayed
                            position: 'bottom', // Position the legend at the top
                            labels: {
                              font: {
                                size: 12, // Adjust the font size
                              },
                              color: '#000', // Set the label color
                            },
                          },
                          datalabels: {
                            display: true,
                            color: 'black', // Color of the displayed value
                            align: 'end', // Position it on top of the bar
                            anchor: 'end', // Anchor the text on the end of the bar
                            font: {
                              weight: 'bold',
                              size: 12,
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {showType == "Donut" && (
          <div style={{ maxWidth: "1400px" }}>

            {menu.map((menuItem, menuIndex) => (
              <div key={menuIndex}>
                <div className='content-header-container'>
                  <p className='content-header'><strong style={{ color: "black" }}>{menuItem.name}</strong></p>
                  <span>
                    <p className='content-header-right' ><RiLayoutGridFill data-name="Table" onClick={handleTable} /></p>
                    <p className='content-header-right' ><ImTable2 data-name="Table" onClick={handleTable} /></p>
                    <p className='content-header-right' > <PiChartDonutFill data-name="Donut" onClick={handleDonut} style={{ color: "black" }} /></p>
                    <p className='content-header-right' > <FaChartBar data-name="Bar" onClick={handleBar} style={{ color: "black" }} /></p>
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  {menuItem.table_data.map((tenant, tenantIndex) => {
                    const pieData = [
                      { name: 'Packages', value: tenant.Package },
                      { name: 'Packages Backup', value: tenant.Package_Backup },
                      { name: 'Artifacts', value: tenant.Artifact },
                      { name: 'Credentials', value: tenant.Credential },
                      { name: 'Global Variables', value: tenant.Global_Variable },
                      { name: 'Number Ranges', value: tenant.Number_Range }
                    ];

                    // Sort pieData in descending order based on value to have the highest value outside
                    const sortedPieData = pieData.sort((a, b) => a.value - b.value);
                    console.log(sortedPieData)


                    return (
                      <div key={tenantIndex} style={{ textAlign:"center", margin: '10px', flex: '1 1 30%'}}>
                        {/* <PieChart width={500} height={300}>
                          <Tooltip />
                          <Pie
                            data={pieData}
                            dataKey="value"
                            outerRadius={80}
                            innerRadius={40}
                            label={({ name, value }) => `${name}: ${value}`}
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                          </Pie>
                        </PieChart> */}
                        
                        <RadialBarChart
                          width={300}    // Adjust width as needed
                          height={300}   // Adjust height as needed
                          style={{marginLeft: '35px'}}
                          cx="50%"
                          cy="50%"
                          innerRadius="10%"
                          outerRadius="90%"
                          barSize={10} 
                          data={sortedPieData.map((data) => ({
                            name: data.name,
                            value: data.value, // Normalize to percentage
                            fill: colorsMap[data.name],
                            
                            
                          }))}
                          
                        >
                          {sortedPieData.map((data, index) => ( // Render based on sorted data
                            <RadialBar
                            key={data.name} // Use name as a key for better identification
                            minAngle={15}
                            background
                            clockWise
                            dataKey="value"
                            cornerRadius={10}
                            fill={colorsMap[data.name]}
                            radius={[90 - index * 15]} // Adjust spacing between bars if needed  
                                                
                            />
                          ))}
                          <Tooltip content={<CustomTooltip />} />
                        </RadialBarChart>
                        <div style={{ marginTop: '8px', fontWeight: 'bold' }}>{tenant.tenant_name}</div> {/* Tenant Name */}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div >

  );
}
export default Tenant;