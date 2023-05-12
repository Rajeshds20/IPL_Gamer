import React from "react";
import TeamsData from "../data/TeamsData";
import { Table } from "react-bootstrap";



const EachTeamPage = () => {

    let team_name = window.location.pathname.split('/')[2];

    if (team_name in TeamsData) {
        console.log("Team Exists");
        const team_data = TeamsData[team_name];
        console.log(team_data);

        return (
            <div>
                <h1 style={{ color: "blueviolet", textAlign: "center" }}>{team_data.name} ({team_data.shortName})</h1>
                <div style={{ display: "flex", justifyContent: "space-around", padding: "5%", borderRadius: "10%", backgroundColor: "gray" }} className="container">
                    <div>
                        <h2 style={{ color: "blueviolet" }}>Team Logo</h2>
                        <img style={{ width: "50%", height: "auto" }} src={team_data.logo} alt="Team Logo" />
                    </div><br /><br />
                    <div>
                        <h2>Official Page</h2>
                        <a style={{ color: "indigo" }} href={team_data.site} target="_blank" rel="noreferrer"><h2><i>Visit Page</i></h2></a>
                    </div><br /><br />
                </div>

                <div className="container">
                    <div style={{ marginTop: "5%" }} className="row">
                        <div className="col-sm-12">
                            <div style={{ backgroundColor: "gray", textAlign: "center", borderRadius: "8%" }} className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h5>Team Players</h5>
                                        <div className="card-text">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <Table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Player Name</th>
                                                                <th scope="col">Player Role</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {team_data.players.batsmen.map((player, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{player.name}</td>
                                                                        <td>{player.role}</td>
                                                                    </tr>
                                                                );
                                                            })}
                                                            <tr>
                                                                <td>{team_data.players.wicketkeeper.name}</td>
                                                                <td>{team_data.players.wicketkeeper.role}</td>
                                                            </tr>
                                                            {team_data.players.allrounders.map((player, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{player.name}</td>
                                                                        <td>{player.role}</td>
                                                                    </tr>
                                                                );
                                                            })}
                                                            {team_data.players.bowlers.map((player, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{player.name}</td>
                                                                        <td>{player.role}</td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    else {
        return <h1 style={{ color: "red", textAlign: "center" }}>Page Not Found</h1>
    }
}

export default EachTeamPage;