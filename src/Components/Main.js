import React from 'react';
import {Outlet} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import LeftNav from "./Page/LeftNav/LeftNav";
import RightNav from "./Page/RightNav/RightNav";
import Header from "./Page/Header/Header";
import Footer from "./Page/Footer";

const Main = () => {
    return (
        <>
        <Header></Header>
        <Container>

            <Row>
                <Col lg="2" className="d-none d-lg-block">
                    <LeftNav></LeftNav>
                </Col>
                <Col lg="7">
                    <Outlet></Outlet>
                </Col>
                <Col lg="3">
                    <RightNav></RightNav>
                </Col>
            </Row>


        </Container>
            <Footer></Footer>
        </>
    );
};

export default Main;