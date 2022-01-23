import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import homeLogo from '../../images/homeCover1.png'
import './style.css'

function Home() {
    return (
        <Container fluid className="p-0">
            <Row>
                <Col xs={12} md={6}>
                    <div className="objective">
                        <h2 className = 'ObjectivesTitle'>Objectives</h2>
                        <ul>
                            <li>Add fun to the students and the education.</li>
                            <li>Motivate the students and spread the sprit of competition.</li>
                            <li>Communicate the information in an entertaining and enjoyable way.</li>
                            <li>Change the study routine.</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <img className="homeCover" src = {homeLogo} alt="homeCover" />
                </Col> 
            </Row>
        </Container>
    )
}

export default Home
