import React from "react";
import ScheduleData from "../data/ScheduleData";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div>
        <h1 style={{ color: "brown", textAlign: "center" }}>IPL Schedule</h1>
        <div style={{ marginLeft: "10%", marginTop: "25px", width: "80%" }}>
            {ScheduleData.map((match, index) => (
                <div key={index} style={{ backgroundColor: props.darkMode ? "#F6B3D3" : "#cfe2f3", padding: "20px", borderRadius: "20px", marginBottom: "25px" }}>
                    <h3 style={{ color: "brown" }}>Match {index + 1}</h3>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "45%" }}>
                            <h5 style={{ color: "brown" }}>Team 1</h5>
                            <h6>{match.team1}</h6>
                        </div>
                        <div style={{ width: "45%" }}>
                            <h5 style={{ color: "brown" }}>Team 2</h5>
                            <h6>{match.team2}</h6>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "45%" }}>
                            <h5 style={{ color: "brown" }}>Venue</h5>
                            <h6>{match.venue}</h6>
                        </div>
                        <div style={{ width: "45%" }}>
                            <h5 style={{ color: "brown" }}>Date</h5>
                            <h6>{match.date}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div >
)