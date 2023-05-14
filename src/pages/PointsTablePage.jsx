import tableData from "../data/PointsTableData";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

function PointsTablePage(props) {

    let navigate = useNavigate();

    return (
        <div style={{ backgroundColor: props.darkMode ? "black" : "white" }}>
            <Table style={{ marginLeft: "10%", marginTop: "25px", width: "80%" }} striped variant={props.darkMode ? "dark" : ""}>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Team Name</th>
                        <th>Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Points</th>
                        <th>NRR</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((team, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td style={{ cursor: "pointer" }} onClick={() => navigate(`/details/teams/`, { state: { team_id: index } })}>{team.team}</td>
                            <td>{team.matches}</td>
                            <td>{team.won}</td>
                            <td>{team.lost}</td>
                            <td>{team.points}</td>
                            <td>{team.nrr}</td>
                        </tr>))}
                </tbody>
            </Table>
        </div>
    )
}

export default PointsTablePage;