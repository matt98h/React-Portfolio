import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Hero(props){
    return(
        <Jumbotron className='bg-transparent'>
            <Container>
                <Row>
                    <Col>
                    {/* Add correct things for title,
                        Style these so they look cleaner
                    */}
                    {props.title && <h1>{props.title}</h1>}
                    {props.subTitle && <h3>{props.subTitle}</h3>}
                    {props.text && <h3>{props.text}</h3>}

                    </Col>
                </Row>
            </Container>
        
        </Jumbotron>
    );

}

export default Hero;