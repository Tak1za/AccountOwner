import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './Home.css';

const Home = props => {
    return(
        <Row>
            <Col md={12}>
                <div className={'homeText'}>
                    Welcome to Account-Owner Application
                </div>
            </Col>
        </Row>
    );
}

export default Home;