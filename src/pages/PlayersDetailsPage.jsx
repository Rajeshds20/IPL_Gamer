/* eslint-disable import/no-anonymous-default-export */
// import NavBar from "../components/NavBar"
import React from "react";
import PlayersData from "../data/PlayersData";
import { useNavigate } from "react-router-dom";

export default () => {

    let navigate = useNavigate();

    return (
        <div>
            <h1 style={{ color: "brown", textAlign: "center" }}>Players Details Page</h1>

            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {PlayersData.players.map((player, index) => (
                        <div key={index} className="col">
                            <div style={{ backgroundColor: "gray", textAlign: "center", borderRadius: "8%" }} className="card">
                                <div className="card-body">
                                    <img style={{ width: "30%", margin: "10%", borderRadius: "20%" }} src={player.image} alt={player.name} />
                                    <h5 className="card-title">{player.name}</h5>
                                    <p className="card-text">{player.description}</p>
                                    <h3 style={{ marginBottom: "1%" }} onClick={() => navigate('/player', {
                                        state: {
                                            player_id: index + 1
                                        }
                                    })} className="btn btn-primary">View Details</h3>
                                    <div style={{ backgroundColor: "gray" }} className="card-footer">
                                        <small className='text'>Last updated 3 mons ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}