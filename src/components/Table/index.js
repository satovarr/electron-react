/** https://www.youtube.com/playlist?list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz */
import React, {useMemo, useState, useEffect} from "react";
import { useTable } from "react-table";
import MOCK_DATA from '../MOCK_DATA.json'
import { Columnst } from '../Columns/index'
import 'bootstrap/dist/css/bootstrap.css';

var mockTableData = MOCK_DATA;

const Table = ({children, active= 0}) => {
    
    const [activeTable, setActiveTable] = useState(active)
    const [tableData, setTableData] = useState(mockTableData[activeTable]['info'])
    const columns = useMemo(() => Columnst, []);
    let data = tableData;

    const newTable = () => {
        mockTableData.push(mockTableData[0])
        
      };
      
    Table.newTable = newTable;

    function updateData () {
        mockTableData[mockTableData.length-1] = mockTableData[1];
        data = tableData;
        setTableData(mockTableData[active]['info']);
    }
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    useEffect(() => {
        updateData(active);
        newTable()
    })


    return (
        <>
            <h1>{active}</h1>
            <button><a
            onClick={() => newTable()}></a>add table</button>
            <table className="table" {...getTableProps()}>
                <thead className="thead-dark">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
};

export default Table;