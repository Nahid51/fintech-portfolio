import { TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import "./Stocks.css";

const Stocks = ({ row }) => {
    const { name, money, percentage } = row;
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>
                <Typography sx={{ backgroundColor: "#EDEDED", padding: "5px 0", borderRadius: "5px", textAlign: "center" }}>
                    {`£${money}`}
                </Typography>
            </TableCell>
            <TableCell className='third-row'>{percentage}</TableCell>
        </TableRow>
    );
};

export default Stocks;