import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip, Label, Text } from 'recharts';
import "./Chart.css";

const Chart = () => {
    const chartData = [
        {
            name: '',
            earn: 0,
        },
        {
            name: 'January',
            earn: 10,
        },
        {
            name: 'February',
            earn: 40,
        },
        {
            name: 'March',
            earn: 50,
        },
        {
            name: 'April',
            earn: 50,
        },
        {
            name: 'May',
            earn: 55,
        },
        {
            name: 'June',
            earn: 60,
        },
        {
            name: 'July',
            earn: 65,
        },
        {
            name: 'August',
            earn: 80,
        },
        {
            name: '',
            earn: 85,
        },
    ];
    return (
        <div>
            <Container maxWidth="xxl">
                <Box className='chart_text' sx={{ margin: "1rem 0 0 10rem" }}>
                    <Typography sx={{ fontSize: 24, fontWeight: "bold", marginLeft: "5px" }}>Portfolio</Typography>
                    <Button className="settings_button" variant="contained" sx={{ backgroundColor: "#F0F1F6", color: "#7482BF", borderRadius: "20px", fontWeight: 'bold', marginTop: "10px" }}>Settings</Button>
                </Box>

                <ResponsiveContainer width="100%" aspect={3} >
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={chartData}>
                            <XAxis dataKey="name" interval={'preserveStartEnd'} />
                            <Tooltip />
                            <Line type="monotone" dataKey="earn" stroke="#7281C0" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </ResponsiveContainer>
            </Container>
        </div>
    );
};

export default Chart;