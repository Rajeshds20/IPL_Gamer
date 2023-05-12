/* eslint-disable import/no-anonymous-default-export */
// import NavBar from "../components/NavBar"
import React from "react";
import PlayersData from "../data/PlayersData";

export default () => (
    <div>
        <h1 style={{ color: "brown", textAlign: "center" }}>Players Details Page</h1>

        <div className="container">
            <div className="row">
                <div style={{ width: "33%", height: "33%", marginTop: "5% " }} className="col- sm - 4">
                    <div style={{ backgroundColor: "gray", textAlign: "center", borderRadius: "8%" }} className="card">
                        <div className="card-body">
                            <img style={{ width: "30%", margin: "10%", borderRadius: "20%" }} src={PlayersData.players[0].photo} alt={PlayersData.players[0].name} />
                            <h5 className="card-title">{PlayersData.players[0].name}</h5>
                            <p className="card-text">{PlayersData.players[0].description}</p>
                            <a style={{ marginBottom: "1%" }} href={`/players/${PlayersData.players[0].name}`} className="btn btn-primary">View Details</a>
                            <div style={{ backgroundColor: "gray" }} className="card-footer">
                                <small className='text'>Last updated 3 mons ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)