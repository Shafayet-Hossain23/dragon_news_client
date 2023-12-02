import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPages/Header/Header';
import LeftSide from '../SharedPages/LeftSide/LeftSide';
import RightSide from '../SharedPages/RightSide/RightSide';
import { FaBeer } from 'react-icons/fa';


const Main = () => {
    return (

        <div>
            <Header></Header>
            <div className='bg-dark text-white mt-5 pt-5 pb-5'>
                <Container>
                    <Row>
                        <Col xs={2} >
                            <LeftSide></LeftSide>
                        </Col>
                        <Col xs={7}>
                            <Outlet></Outlet>
                        </Col>
                        <Col>
                            <RightSide></RightSide>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Main;