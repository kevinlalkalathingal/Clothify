import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './HomeContent.css'
import man1 from '../assets/man1.jpg'
import man2 from '../assets/man2.jpg'
import man3 from '../assets/man3.jpg'
import man4 from '../assets/man4.jpg'
import man5 from '../assets/man5.jpg'
import man6 from '../assets/man6.jpg'
import man7 from '../assets/man7.jpg'
import man8 from '../assets/man8.jpg'

class MenContent extends Component {
    render() {
        return (
            <div className="Content">
                <Card border="info" className="text-center">
                    <Card.Header style={{ backgroundColor: "#dbeeff", fontFamily: "Noto Serif, serif" }}><h3>Men's Section</h3></Card.Header>
                    <Card.Body style={{ backgroundColor: "aliceblue" }}>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img variant="top" src={man1} />
                                        <Card.Body>
                                            <Card.Title>&#8377;4500</Card.Title>
                                            <Card.Text>
                                                Lee Cooper
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '12.6rem' }}>
                                        <Card.Img variant="top" src={man2} />
                                        <Card.Body>
                                            <Card.Title>&#8377;3200</Card.Title>
                                            <Card.Text>
                                                Spykar
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '13rem' }}>
                                        <Card.Img variant="top" src={man3} />
                                        <Card.Body>
                                            <Card.Title>&#8377;3500</Card.Title>
                                            <Card.Text>
                                                Versace
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img variant="top" src={man4} />
                                        <Card.Body>
                                            <Card.Title>&#8377;4800</Card.Title>
                                            <Card.Text>
                                                Gucci
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Card style={{ width: '13.1rem' }}>
                                        <Card.Img variant="top" src={man5} />
                                        <Card.Body>
                                            <Card.Title>&#8377;3000</Card.Title>
                                            <Card.Text>
                                                Louis Philippe
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '12rem' }}>
                                        <Card.Img variant="top" src={man6} />
                                        <Card.Body>
                                            <Card.Title>&#8377;2700</Card.Title>
                                            <Card.Text>
                                                H&M
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '16.4rem' }}>
                                        <Card.Img variant="top" src={man7} />
                                        <Card.Body>
                                            <Card.Title>&#8377;2300</Card.Title>
                                            <Card.Text>
                                                MW
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '13.7rem' }}>
                                        <Card.Img variant="top" src={man8} />
                                        <Card.Body>
                                            <Card.Title>&#8377;2500</Card.Title>
                                            <Card.Text>
                                                Flying Machine
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                    <Card.Footer style={{ fontFamily: "'Noto Serif', serif" }} className="text-muted">Clothify &copy; 2021</Card.Footer>
                </Card>
            </div>
        )
    }
}

export default MenContent;
