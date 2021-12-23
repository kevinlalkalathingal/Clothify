import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './HomeContent.css'
import woman1 from '../assets/woman1.jpg'
import woman2 from '../assets/woman2.jpg'
import woman3 from '../assets/woman3.jpg'
import woman4 from '../assets/woman4.jpg'
import woman5 from '../assets/woman5.jpg'
import woman6 from '../assets/woman6.jpg'
import woman7 from '../assets/woman7.jpg'
import woman8 from '../assets/woman8.jpg'

class WomenContent extends Component {
    render() {
        return (
            <div className="Content">
                <Card border="info" className="text-center">
                    <Card.Header style={{ backgroundColor: "#dbeeff", fontFamily: "Noto Serif, serif" }}><h3>Women's Section</h3></Card.Header>
                    <Card.Body style={{ backgroundColor: "aliceblue" }}>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{ width: '12.2rem' }}>
                                        <Card.Img variant="top" src={woman1} />
                                        <Card.Body>
                                            <Card.Title>&#8377;4500</Card.Title>
                                            <Card.Text>
                                                Lee Cooper
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '15.6rem' }}>
                                        <Card.Img variant="top" src={woman2} />
                                        <Card.Body>
                                            <Card.Title>&#8377;3200</Card.Title>
                                            <Card.Text>
                                                Gucci
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img variant="top" src={woman3} />
                                        <Card.Body>
                                            <Card.Title>&#8377;3500</Card.Title>
                                            <Card.Text>
                                                Versace
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '12.8rem' }}>
                                        <Card.Img variant="top" src={woman4} />
                                        <Card.Body>
                                            <Card.Title>&#8377;4800</Card.Title>
                                            <Card.Text>
                                                Spykar
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br />
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
                        </Container>
                    </Card.Body>
                    <Card.Footer style={{ fontFamily: "'Noto Serif', serif" }} className="text-muted">Clothify &copy; 2021</Card.Footer>
                </Card>
            </div>
        )
    }
}

export default WomenContent;
