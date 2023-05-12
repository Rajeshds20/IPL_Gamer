/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
// import NavBar from "../components/NavBar";
import Carousel from 'react-bootstrap/Carousel';
import { Rating } from "@mui/material";
import "../App.css";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const [rating, setRating] = useState(0);

    return (
        <div div style={{ backgroundColor: props.darkMode ? "black" : "azure", color: props.darkMode ? "white" : "black" }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        // style={{ width: "100%", height: "auto" }}
                        height={600}
                        className="d-block w-100"
                        src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/6527ac74-43ba-4809-b910-5016ce3aeca2/f68c7d48-127d-4b05-bf29-95022c036bd0/1280x720/match/image.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>IPL</h3>
                        <h1>INDIAN PREMIERE LEAGUE</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // style={{ width: "100%", height: "auto" }}
                        height={600}
                        className="d-block w-100"
                        src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/07a946f6-a70e-4ed3-bd69-1235f9d70aef/32b358fa-2386-4ae5-9757-b00d22892988/1280x720/match/image.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>IPL</h3>
                        <h1>INDIAN PREMIERE LEAGUE</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // style={{ width: "100%", height: "auto" }}
                        height={600}
                        className="d-block w-100"
                        src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/cfba3555-efd4-48ca-b5af-58c8e152ed0c/663ff9a7-e7cb-4e9b-b8b0-3403f63e194e/1280x720/match/image.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>IPL</h3>
                        <h1>INDIAN PREMIERE LEAGUE</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-around", flexDirection: "row" }}>
                <span>
                    <div style={{ fontSize: "30px" }}>What are you looking for...</div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ margin: "10px" }}>
                            <a style={{ fontSize: "30px", color: "blueviolet" }} href="/schedule" target="_blank" rel="noreferrer">Go to Schedule</a><br />
                            <a style={{ fontSize: "30px", color: "blueviolet" }} href="/details/teams" target="_blank" rel="noreferrer">Go to Team Details</a><br />
                            <a style={{ fontSize: "30px", color: "blueviolet" }} href="/details/players" target="_blank" rel="noreferrer">Go to Players Details</a><br />
                        </div>
                    </div>
                </span>
                <span style={{ marginTop: "-20px", width: "10px", backgroundColor: "white" }}></span>
                <span>
                    <div style={{ fontSize: "30px" }}>Rate your Team...</div>
                    <form>
                        <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row" }}>
                            <div style={{ margin: "10px" }}>
                                <select style={{ fontSize: "30px", color: "black" }} id="team" name="team">
                                    <option value="csk">CSK</option>
                                    <option value="mi">MI</option>
                                    <option value="rcb">RCB</option>
                                    <option value="srh">SRH</option>
                                </select><br />
                            </div>
                            <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                                <Rating
                                    style={{ fontSize: "40px", backgroundColor: "white" }}
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                />
                            </div>
                        </div>
                        <br />
                        <input style={{ backgroundColor: "skyblue", marginLeft: "100px", fontSize: "20px", fontWeight: "500", color: "black" }} type="submit" value="Submit" />
                    </form>
                </span>
            </div>
        </div >
    );
}