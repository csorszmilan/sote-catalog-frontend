import React from "react";
import { DataGrid } from '@material-ui/data-grid';


const LessonStatisticsTable = (props) => {
    console.log(props?.data)
    // { field: 'id', headerName: 'ID', width: 70 },
    let columns = [
        { field: 'id', headerName: 'id', width: 100 },
        { field: 'name', headerName: 'név', width: 100 },
        { field: 'potlas', headerName: 'pótlás', width: 100 },
        { field: 'headcount', headerName: 'részvétel', width: 200 }
    ]

    let rows = [
    ]


    let id = 0;
    props.data.forEach(item => {
        id++;
        rows.push({id:id ,name: item.currentClass.name, potlas:item.currentClass.potlas ,headcount: item.headCount})
    })



    return  <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
    </div>
}

export default LessonStatisticsTable;