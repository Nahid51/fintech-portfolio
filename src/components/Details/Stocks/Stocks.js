import { TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

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
            <TableCell>
                <Typography sx={{ color: "#4E8356", fontWeight: "bold" }}>
                    {percentage}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

export default Stocks;