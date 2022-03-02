/** https://www.youtube.com/playlist?list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz */
import React, {useMemo, useState, useEffect} from "react";
import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from '../MOCK_DATA.json'
import { Columnst } from '../Columns/index'
import 'bootstrap/dist/css/bootstrap.css';
import { Checkbox } from "../Checkbox";

var mockTableData = MOCK_DATA;

const SortTable = ({children, active= 0}) => {
    
    const [activeTable, setActiveTable] = useState(active)
    const [tableData, setTableData] = useState(mockTableData[activeTable]['info'])
    const columns = useMemo(() => Columnst, []);
    let data = tableData;

    const newTable = () => {
        mockTableData.push(mockTableData[0])
        
      };
      
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
        prepareRow,
        selectedFlatRows
    } = useTable(
    {
      columns,
      data
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ])
    }
  )

    const firstPageRows= rows.slice(0,10)

    useEffect(() => {
        updateData(active);
        newTable()
    })


    return (
        <>
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
                    {firstPageRows.map(row => {
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
            <pre>
                <code>
                    {JSON.stringify({
                        selectedFlatRows: selectedFlatRows.map((row)=> row.original),
                    },
                    null, 2 
                    )}
                </code>
            </pre>
        </>
    )
};


export default SortTable;