import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './HomeContent.css'
import kid1 from '../assets/kid1.jpg'
import kid2 from '../assets/kid2.jpg'
import kid3 from '../assets/kid3.jpg'
import kid4 from '../assets/kid4.jpg'
import kid5 from '../assets/kid5.jpg'
import kid6 from '../assets/kid6.jpg'
import kid7 from '../assets/kid7.jpg'
import kid8 from '../assets/kid8.jpg'

class KidContent extends Component {
    render() {
        return (
            <div className="Content">
                <Card border="info" className="text-center">
                    <Card.Header style={{backgroundColor:"#dbeeff", fontFamily:"Noto Serif, serif"}}><h3>Kid's Section</h3></Card.Header>
                    <Card.Body style={{backgroundColor:"aliceblue"}}>
                        <Container>                            
                            <Row>
                                <Col>
                                    <Card style={{ width: '14.1rem' }}>
                                        <Card.Img variant="top" src={kid1} />
                                        <Card.Body>
                                            <Card.Title>&#8377;4500</Card.Title>
                                            <Card.Text>
                                                Lee Cooper
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '13.2rem' }}>
                                        <Card.Img variant="top" src={kid2} />
                                        <Card.Body>
                                            <Card.Title>&#8377;3200</Card.Title>
                                            <Card.Text>
                                                Gini & Jony
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '14rem' }}>
                                        <Card.Img variant="top" src={kid3} />
                                        <Card.Body>
                                            <Card.Title>&#8377;3500</Card.Title>
                                            <Card.Text>
                                                Pepe Jeans
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '16.4rem' }}>
                                        <Card.Img variant="top" src={kid4} />
                                        <Card.Body>
                                            <Card.Title>&#8377;4800</Card.Title>
                                            <Card.Text>
                                                UFO
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br />
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
                        </Container>
                    </Card.Body>    
                    <Card.Footer style={{fontFamily: "'Noto Serif', serif"}} className="text-muted">Clothify &copy; 2021</Card.Footer>                 
                </Card>
            </div>
        )
    }
}

export default KidContent;
