import React from 'react';
import useTransactionCount from '../hooks/useTransactionCount';
import { useSelector } from 'react-redux';
import { selectSelectedPRI } from '../features/scopePriMaping/ListingsSlice';

function Table() {
    const sampleRow = {
        name: "Information TBD",
        orderSource: "Information TBD",
        transactionStatus: "Information TBD",
        initiatedBy: "Information TBD",
        initiatedDate: "Information TBD",
    };

    const selectedPRI = useSelector(selectSelectedPRI);

    const rowCount = useTransactionCount(selectedPRI)

    const data = Array.from({ length: rowCount }, () => ({ ...sampleRow }));

    const columns = Object.keys(sampleRow);

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                                <tr>
                                    {columns.map((column, index) => (
                                        <th
                                            key={index}
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                        >
                                            {column.charAt(0).toUpperCase() + column.slice(1).replace(/([A-Z])/g, ' $1')}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {data.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                        {columns.map((column, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                            >
                                                {row[column]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
