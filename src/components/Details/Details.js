import { Box, Container, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "./Details.css";
import Stocks from './Stocks/Stocks';
import { Button, Typography } from '@mui/material';

const Details = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('./stocks.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);
    return (
        <div>
            <Container>
                <div className='detail-section'>
                    <div>
                        <Typography
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                            }}
                        >
                            <h2>Stocks</h2>
                            <Button className="settings_button" variant="contained" sx={{ backgroundColor: "#F0F1F6", color: "#7482BF", borderRadius: "20px", fontWeight: 'bold', marginTop: "10px" }}>Buy Now</Button>
                        </Typography>
                        {
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        {allData.map((row, index) => (
                                            <Stocks
                                                key={index}
                                                row={row}
                                            ></Stocks>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        }
                    </div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </Container>
        </div>
    );
};

export default Details;