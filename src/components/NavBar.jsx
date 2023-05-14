import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav, Navbar } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';

function NavBar(props) {

    return (
        <div style={{ marginBottom: "20px", backgroundColor: props.darkMode ? "#282c34" : "aqua", color: props.darkMode ? "white" : "black" }}>
            <div style={{ marginLeft: "40px", marginRight: "20px", display: "flex", justifyContent: "space-between", fontSize: "25px", fontWeight: "500" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <img src="https://th.bing.com/th/id/R.eea89ff96de06113e5f9b9f0265df283?rik=Js5MoDB6bWg3Fw&riu=http%3a%2f%2fiplt20news.com%2fsite%2fuploads%2f2021%2fSep%2f03%2fIPL-Logo-PNG.png&ehk=9WaL0iBs%2fvs9fn0hbRPZHW97B6kDPzPKSwF0cMTNt8w%3d&risl=&pid=ImgRaw&r=0" alt="logo" style={{ width: "60px", height: "70px" }} />
                    <a href='/' style={{ marginLeft: "10px", fontSize: "30px", color: props.darkMode ? "white" : "black", marginTop: "15px" }}><h2>IPL 2023</h2></a>
                </div>
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
        </div >
    );
}

export default NavBar;