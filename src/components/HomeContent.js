import React, { Component } from 'react'
import './HomeContent.css'
import { Card, Col, Row, Container, Carousel } from 'react-bootstrap'
import man1 from '../assets/man1.jpg'
import man2 from '../assets/man2.jpg'
import man3 from '../assets/man3.jpg'
import man4 from '../assets/man4.jpg'
import man5 from '../assets/man5.jpg'
import man6 from '../assets/man6.jpg'
import man7 from '../assets/man7.jpg'
import man8 from '../assets/man8.jpg'
import woman1 from '../assets/woman1.jpg'
import woman2 from '../assets/woman2.jpg'
import woman3 from '../assets/woman3.jpg'
import woman4 from '../assets/woman4.jpg'
import woman5 from '../assets/woman5.jpg'
import woman6 from '../assets/woman6.jpg'
import woman7 from '../assets/woman7.jpg'
import woman8 from '../assets/woman8.jpg'
import kid1 from '../assets/kid1.jpg'
import kid2 from '../assets/kid2.jpg'
import kid3 from '../assets/kid3.jpg'
import kid4 from '../assets/kid4.jpg'
import kid5 from '../assets/kid5.jpg'
import kid6 from '../assets/kid6.jpg'
import kid7 from '../assets/kid7.jpg'
import kid8 from '../assets/kid8.jpg'



class HomeContent extends Component {
    render() {
        return (
            <div className="Content">
                <Card border="info" className="text-center">
                    <Card.Header style={{ backgroundColor: "#dbeeff", fontFamily: "Noto Serif, serif" }}><h3>Home</h3></Card.Header>
                    <Card.Body style={{ backgroundColor: "aliceblue" }}>
                        <Container>
                            <h3 style={{ fontFamily: "Noto Serif, serif" }}>Men</h3>
                            <br />
                            <Row>
                                {/* Carousel */}
                                <Carousel>
                                    <Carousel.Item>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
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
                                                            Lee Cooper
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </Row>
                            <br />
                            <h3 style={{ fontFamily: "Noto Serif, serif" }}>Women</h3>
                            <br />
                            <Carousel>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '11.8rem' }}>
                                                <Card.Img variant="top" src={woman1} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;3500</Card.Title>
                                                    <Card.Text>
                                                        Aurelia
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '15rem' }}>
                                                <Card.Img variant="top" src={woman2} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;4900</Card.Title>
                                                    <Card.Text>
                                                        Gucci
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '14.6rem' }}>
                                                <Card.Img variant="top" src={woman3} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;3600</Card.Title>
                                                    <Card.Text>
                                                        Levis
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '12.5rem' }}>
                                                <Card.Img variant="top" src={woman4} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;4300</Card.Title>
                                                    <Card.Text>
                                                        Westside
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '12.7rem' }}>
                                                <Card.Img variant="top" src={woman5} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;3000</Card.Title>
                                                    <Card.Text>
                                                        Levis
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '13.4rem' }}>
                                                <Card.Img variant="top" src={woman6} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;2700</Card.Title>
                                                    <Card.Text>
                                                        Burberry
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '15.2rem' }}>
                                                <Card.Img variant="top" src={woman7} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;2300</Card.Title>
                                                    <Card.Text>
                                                        Van Heusen
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '15.7rem' }}>
                                                <Card.Img variant="top" src={woman8} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;2500</Card.Title>
                                                    <Card.Text>
                                                        Lee Cooper
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                            <br />
                            <h3 style={{ fontFamily: "Noto Serif, serif" }}>Kids</h3>
                            <br />
                            <Carousel>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '11.9rem' }}>
                                                <Card.Img variant="top" src={kid1} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;3500</Card.Title>
                                                    <Card.Text>
                                                        Lee Cooper
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '11.2rem' }}>
                                                <Card.Img variant="top" src={kid2} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;4900</Card.Title>
                                                    <Card.Text>
                                                        Gini & Jony
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '12rem' }}>
                                                <Card.Img variant="top" src={kid3} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;3600</Card.Title>
                                                    <Card.Text>
                                                        Pepe Jeans
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '13.9rem' }}>
                                                <Card.Img variant="top" src={kid4} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;4300</Card.Title>
                                                    <Card.Text>
                                                        UFO
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '15.3rem' }}>
                                                <Card.Img variant="top" src={kid5} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;3000</Card.Title>
                                                    <Card.Text>
                                                        YK
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '15.4rem' }}>
                                                <Card.Img variant="top" src={kid6} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;2700</Card.Title>
                                                    <Card.Text>
                                                        H&M
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '10.3rem' }}>
                                                <Card.Img variant="top" src={kid7} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;2300</Card.Title>
                                                    <Card.Text>
                                                        Tommy Hilfiger
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '11rem' }}>
                                                <Card.Img variant="top" src={kid8} />
                                                <Card.Body>
                                                    <Card.Title>&#8377;2500</Card.Title>
                                                    <Card.Text>
                                                        Lee Cooper
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>

                        </Container>
                    </Card.Body>
                    <Card.Footer style={{ fontFamily: "'Noto Serif', serif" }} className="text-muted">Clothify &copy; 2021</Card.Footer>
                </Card>
            </div>
        )
    }
}

export default HomeContent;