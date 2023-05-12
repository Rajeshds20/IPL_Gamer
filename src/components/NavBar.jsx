import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav, Navbar } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';

function NavBar(props) {

    return (
        <div style={{ marginBottom: "20px", backgroundColor: props.darkMode ? "#282c34" : "aqua", color: props.darkMode ? "white" : "black" }}>
            <div style={{ marginLeft: "40px", marginRight: "20px", display: "flex", justifyContent: "space-between", fontSize: "25px", fontWeight: "500" }}>
                <a href="/" style={{ fontSize: "30px", color: props.darkMode ? "white" : "black", marginTop: "15px" }}><h1>IPL 2023</h1></a>
                <Navbar style={{ backgroundColor: props.darkMode ? "#282c34" : "aqua" }} collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <Navbar.Toggle style={{ backgroundColor: props.darkMode ? "#282c34" : "aqua" }} aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                    <Navbar.Collapse style={{ backgroundColor: props.darkMode ? "#282c34" : "aqua" }} id="navbarScroll">
                        <Nav style={{ backgroundColor: props.darkMode ? "#282c34" : "aqua", color: props.darkMode ? "white" : "black" }} className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link style={{ marginLeft: "20px", height: "100%", color: "inherit" }} href="/"><h4>Home</h4></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ marginLeft: "20px", color: "inherit" }} href="/schedule"><h4>Schedule</h4></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ marginLeft: "20px", color: "inherit" }} href="/pointstable"><h4>Points Table</h4></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ marginLeft: "20px", color: "inherit" }} href="/stats"><h4>Stats</h4></Nav.Link>
                            </Nav.Item>
                            <NavDropdown style={{ backgroundColor: "#282c34", color: props.darkMode ? "white" : "black", marginLeft: "20px" }} title="Details" id="nav-dropdown">
                                <NavDropdown.Item href="/details/teams">Teams</NavDropdown.Item>
                                <NavDropdown.Item href="/details/players">Players</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item style={{ color: "inherit" }} rel='nooperner noreferrer' target="_blank" href="https://iplt20.com/">Official Page</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item style={{ marginLeft: "20px" }}>
                                <Nav.Link style={{ color: "inherit" }} href="/about" ><h4>About</h4></Nav.Link>
                            </Nav.Item>
                            <span style={{ marginLeft: "30px", fontSize: "40px", color: props.darkMode ? "white" : "black", fontWeight: "400", cursor: "pointer", background: "inherit" }} onClick={props.handleDarkMode}>{props.darkMode ? "☾" : "☼"}</span>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default NavBar;