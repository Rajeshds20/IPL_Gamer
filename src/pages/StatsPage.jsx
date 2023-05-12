/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import StatsData from "../data/StatsData";
import Table from 'react-bootstrap/Table';


export default (props) => {
    const [isCollapsed, setIsCollapsed] = useState([false, false, false, false, false,]);

    const toggleCollapse = (index) => {
        setIsCollapsed((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };





    return (
        <div>
            <h1 style={{ color: "blue", textAlign: "center" }}>Stats Page</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card bg-dark text-white">
                            <div className="card-header">
                                <h1 style={{ fontWeight: "750", color: "green", textAlign: "center", marginTop: "20px", marginBottom: "15px" }} className="card-title">IPL STATS</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card bg-dark text-white">
                            <div style={{ marginTop: "20px" }}>
                                <div onClick={() => toggleCollapse(0)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }} className="card-header">
                                    <h3 className="collapsible-bar-title card-title">Orange Cap</h3>
                                    <i className={isCollapsed[0] ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
                                </div>

                                {isCollapsed[0] && <div style={{ margin: "15px", backgroundColor: "orange" }} className="card-body">
                                    <div className="collapsive-content" style={{ backgroundColor: props.darkMode ? "black" : "white" }}>
                                        <Table style={{ marginLeft: "10%", marginTop: "25px", width: "80%" }} striped variant={props.darkMode ? "dark" : ""}>
                                            <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Player</th>
                                                    <th>Team</th>
                                                    <th>Runs</th>
                                                    <th>Matches</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {StatsData.orangecap.map((player, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{player.name}</td>
                                                        <td>{player.team}</td>
                                                        <td>{player.score}</td>
                                                        <td>{player.matches}</td>
                                                    </tr>))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                }
                            </div>

                            <div style={{ marginTop: "20px" }}>
                                <div onClick={() => toggleCollapse(1)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }} className="card-header">
                                    <h3 className="collapsible-bar-title card-title">Purple Cap</h3>
                                    <i className={isCollapsed[1] ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
                                </div>

                                {isCollapsed[1] && <div style={{ transition: "transition: max-height 0.3s ease-out", margin: "15px", backgroundColor: "yellow" }} className='card-header'>
                                    <div className="collapsive-content" style={{ backgroundColor: props.darkMode ? "black" : "white" }}>
                                        <Table style={{ marginLeft: "10%", marginTop: "25px", width: "80%" }} striped variant={props.darkMode ? "dark" : ""}>
                                            <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Player</th>
                                                    <th>Team</th>
                                                    <th>Wickets Taken</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {StatsData.purplecap.map((player, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{player.name}</td>
                                                        <td>{player.team}</td>
                                                        <td>{player.wickets}</td>
                                                    </tr>))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                }
                            </div>

                            <div style={{ marginTop: "20px" }}>
                                <div onClick={() => toggleCollapse(2)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }} className="card-header">
                                    <h3 className="collapsible-bar-title card-title">Most Sixes</h3>
                                    <i className={isCollapsed[4] ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
                                </div>

                                {isCollapsed[2] && <div style={{ margin: "15px", backgroundColor: "blue" }} className="card-header">
                                    <div className="collapsive-content" style={{ backgroundColor: props.darkMode ? "black" : "white" }}>
                                        <Table style={{ marginLeft: "10%", marginTop: "25px", width: "80%" }} striped variant={props.darkMode ? "dark" : ""}>
                                            <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Player</th>
                                                    <th>Team</th>
                                                    <th>Total Sixes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {StatsData.mostsixes.map((player, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{player.name}</td>
                                                        <td>{player.team}</td>
                                                        <td>{player.sixes}</td>
                                                    </tr>))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                }
                            </div>

                            <div style={{ marginTop: "20px" }}>
                                <div onClick={() => toggleCollapse(3)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }} className="card-header">
                                    <h3 className="collapsible-bar-title card-title">Most Fours</h3>
                                    <i className={isCollapsed[3] ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
                                </div>

                                {isCollapsed[3] && <div style={{ margin: "15px", backgroundColor: "skyblue" }} className="card-header">
                                    <div className="collapsive-content" style={{ backgroundColor: props.darkMode ? "black" : "white" }}>
                                        <Table style={{ marginLeft: "10%", marginTop: "25px", width: "80%" }} striped variant={props.darkMode ? "dark" : ""}>
                                            <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Player</th>
                                                    <th>Team</th>
                                                    <th>Total Fours</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {StatsData.mostfours.map((player, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{player.name}</td>
                                                        <td>{player.team}</td>
                                                        <td>{player.fours}</td>
                                                    </tr>))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                }
                            </div>

                            <div style={{ marginTop: "20px" }}>
                                <div onClick={() => toggleCollapse(4)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }} className="card-header">
                                    <h3 className="collapsible-bar-title card-title">Fair Play</h3>
                                    <i className={isCollapsed[4] ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
                                </div>

                                {isCollapsed[4] && <div style={{ margin: "15px", backgroundColor: "blueviolet" }} className="card-header">
                                    <div className="collapsive-content" style={{ backgroundColor: props.darkMode ? "black" : "white" }}>
                                        <Table style={{ marginLeft: "10%", marginTop: "25px", width: "80%" }} striped variant={props.darkMode ? "dark" : ""}>
                                            <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Team</th>
                                                    <th>Fair Play Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {StatsData.fairplay.map((team, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{team.name}</td>
                                                        <td>{team.points}</td>
                                                    </tr>))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};
