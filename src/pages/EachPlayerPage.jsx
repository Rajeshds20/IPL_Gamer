/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import PlayersData from "../data/PlayersData";
import { useLocation } from "react-router-dom";
import "../App.css"

export default (props) => {

    let location = useLocation();

    let player_id = location.state.player_id;
    const player_details = PlayersData.getPlayer(player_id);

    return (
        <div style={{ backgroundImage: props.darkMode ? "linear-gradient(#000000, #262626)" : "linear-gradient(#FFFFFF, #DDDDDD)" }}>
            <div style={{ backgroundColor: props.darkMode ? "white" : "black" }} className="player-card">
                <div className="player-image">
                    <img src={player_details.image} alt={player_details.name} />
                </div>
                <div style={{ color: props.darkMode ? "black" : "white" }} className="player-details">
                    <h2>{player_details.name}</h2>
                    <p className="player-info"><strong>Country:</strong> {player_details.country}</p>
                    <p className="player-info"><strong>Age:</strong> {player_details.age}</p>
                    <p className="player-info"><strong>Role:</strong> {player_details.role}</p>
                    <p className="player-info"><strong>Batting Style:</strong> {player_details.battingStyle}</p>
                    <p className="player-info"><strong>Bowling Style:</strong> {player_details.bowlingStyle}</p>
                    <div style={{ color: "black" }} className="player-stats-container">
                        <div className="player-stats-row">
                            <div className="player-stats-col">
                                <p className="player-stats-label">Matches</p>
                                <p className="player-stats-value">{player_details.matches}</p>
                            </div>
                            <div className="player-stats-col">
                                <p className="player-stats-label">Innings</p>
                                <p className="player-stats-value">{player_details.innings}</p>
                            </div>
                            <div className="player-stats-col">
                                <p className="player-stats-label">Not Outs</p>
                                <p className="player-stats-value">{player_details.notOuts}</p>
                            </div>
                        </div>
                        <div className="player-stats-row">
                            <div className="player-stats-col">
                                <p className="player-stats-label">Runs</p>
                                <p className="player-stats-value">{player_details.runs}</p>
                            </div>
                            <div className="player-stats-col">
                                <p className="player-stats-label">Highest Score</p>
                                <p className="player-stats-value">{player_details.highestScore}</p>
                            </div>
                            <div className="player-stats-col">
                                <p className="player-stats-label">Balls Faced</p>
                                <p className="player-stats-value">{player_details.ballsFaced}</p>
                            </div>
                        </div>
                        <div className="player-stats-row">
                            <div className="player-stats-col">
                                <p className="player-stats-label">Strike Rate</p>
                                <p className="player-stats-value">{player_details.strikeRate}</p>
                            </div>
                            <div className="player-stats-col">
                                <p className="player-stats-label">Average</p>
                                <p className="player-stats-value">{player_details.average}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
