/* eslint-disable import/no-anonymous-default-export */
// import NavBar from "../components/NavBar"
import React from 'react'
import TeamsData from '../data/TeamsData'


export default (props) => (
    <div style={{ backgroundImage: props.darkMode ? "linear-gradient(#000000, #262626)" : "linear-gradient(#FFFFFF, #DDDDDD)" }}>
        <h1 style={{ color: "blueviolet", textAlign: "center" }}>Team Details Page</h1>

        <div className="container">
            <div className="row">
                {TeamsData.teams.map((team, index) => (
                    <div key={index} style={{ width: "33%", height: "33%", marginTop: "5% " }} className="col- sm - 4">
                        <div style={{ backgroundColor: "gray", textAlign: "center", borderRadius: "8%" }} className="card">
                            <div className="card-body">
                                <img style={{ width: "30%", margin: "10%", borderRadius: "20%" }} src={team.logo} alt={team.name} />
                                <h5 className="card-title">{team.name}</h5>
                                <p className="card-text">{team.description}</p>
                                <a style={{ marginBottom: "1%" }} href={`/teams/${team.shortName}`} className="btn btn-primary">View Details</a>
                                <div style={{ backgroundColor: "gray" }} className="card-footer">
                                    <small className='text'>Last updated 3 mons ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    </div >
);