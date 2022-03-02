/** https://www.youtube.com/playlist?list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz */
import React, {useMemo, useState} from "react";
import { useTable } from "react-table";
import MOCK_DATA from '../MOCK_DATA.json'
import { Columnst } from '../Columns/index'
import 'bootstrap/dist/css/bootstrap.css';

export const Table = ({children}) => {
    let index = children;
    const [activeTable, setActiveTable] = useState(index)
    const columns = useMemo(() => Columnst, []);
    let data = useMemo(() => MOCK_DATA[activeTable]['info'], []);
    console.log(children)

    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })


    return (
        <>
            <a
                href="#"
                onClick={() => setActiveTable(1)}
            >
                button
            </a>
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
