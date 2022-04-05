import { Box, Container, Table, TableBody, TableContainer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import "./Details.css";
import Stocks from './Stocks/Stocks';
import { Button, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../../image/gold.png";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#7180BF" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "#7180BF" }}
            onClick={onClick}
        />
    );
}

const Details = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('./stocks.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <Container maxWidth="xl">
                <div className='detail-section'>
                    <div>
                        <Box sx={{ marginRight: 4 }}>
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
                                <Typography sx={{ fontWeight: "bold" }}>Stocks</Typography>
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
                        </Box>
                    </div>

                    <div>
                        <Box sx={{ marginRight: 4 }}>
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
                                <Typography sx={{ fontWeight: "bold" }}>Stocks</Typography>
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
                        </Box>
                    </div>

                    <div>
                        <Box maxWidth="25rem">
                            <Typography sx={{ marginTop: "30px", fontWeight: "bold" }}>
                                Tips
                            </Typography>
                            <div style={{ marginTop: "25px", backgroundColor: "#F7F7F7", padding: "30px", borderRadius: "20px" }}>
                                <Slider {...settings}>
                                    <div>
                                        <Typography sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                                            <Typography>Gold is up 20%</Typography>
                                            <img src={photo} alt="Gold" />
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", marginTop: "20px" }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto aliquid ut nemo vero? Architecto quod facilis dignissimos eveniet vero obcaecati! Perspiciatis repellendus et accusamus officia harum vitae sed animi!
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                                            <Typography>Gold is up 20%</Typography>
                                            <img src={photo} alt="Gold" />
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", marginTop: "20px" }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto aliquid ut nemo vero? Architecto quod facilis dignissimos eveniet vero obcaecati! Perspiciatis repellendus et accusamus officia harum vitae sed animi!
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                                            <Typography>Gold is up 20%</Typography>
                                            <img src={photo} alt="Gold" />
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", marginTop: "20px" }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto aliquid ut nemo vero? Architecto quod facilis dignissimos eveniet vero obcaecati! Perspiciatis repellendus et accusamus officia harum vitae sed animi!
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                                            <Typography>Gold is up 20%</Typography>
                                            <img src={photo} alt="Gold" />
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", marginTop: "20px" }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto aliquid ut nemo vero? Architecto quod facilis dignissimos eveniet vero obcaecati! Perspiciatis repellendus et accusamus officia harum vitae sed animi!
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                                            <Typography>Gold is up 20%</Typography>
                                            <img src={photo} alt="Gold" />
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", marginTop: "20px" }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto aliquid ut nemo vero? Architecto quod facilis dignissimos eveniet vero obcaecati! Perspiciatis repellendus et accusamus officia harum vitae sed animi!
                                        </Typography>
                                    </div>

                                </Slider>
                            </div>
                        </Box>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Details;