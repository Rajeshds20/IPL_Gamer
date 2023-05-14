import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = (props) => {
    return (
        <div style={{ color: props.darkMode ? "white" : "black" }} className="about- page" >
            <Container >
                <Row>
                    <Col xs={12}>
                        <h1>About IPL Gamer</h1>
                        <p>
                            IPL Gamer is a web application built using ReactJS. It provides
                            users with a platform to view live scores, schedules, team and
                            player information, and more related to the Indian Premier League
                            (IPL) cricket tournament.
                        </p>
                        <p>
                            The application is built using various front-end technologies such
                            as ReactJS, React Router, React Bootstrap, and Material UI. It is a
                            responsive and user-friendly application that is designed to work
                            across all devices and screen sizes.
                        </p>
                        <p>
                            The application is developed by Rajesh, a front-end web
                            developer with expertise in building web
                            applications using various front-end technologies.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <h2>Features</h2>
                        <ul>
                            <li>Schedules and fixtures</li>
                            <li>Team and player information</li>
                            <li>News and updates</li>
                            <li>Points table</li>
                            <li>Dark mode</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Tech Stack</h2>
                        <ul>
                            <li>ReactJS</li>
                            <li>React Router</li>
                            <li>React Bootstrap</li>
                            <li>Material UI</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Contact Developer</h2>
                        <p>
                            For any queries or feedback related to the application, please
                            contact the developer at:
                        </p>
                        <ul>
                            <li>Email: dsrajesh71@gmail.com</li>
                            <li>LinkedIn: <a href="https://linkedin/com/in/devangamsajjarajesh" target="_blank" rel="noreferrer">Devangam Sajja Rajesh</a></li>
                            <li>github: <a href="https://github.com/rajeshds20" target="_blank" rel="noreferrer">@rajeshds20</a></li>
                            <li>Twitter: <a href="https://twitter.com/rajeshds55" target="_blank" rel="noreferrer">@rajeshds55</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default AboutPage;
