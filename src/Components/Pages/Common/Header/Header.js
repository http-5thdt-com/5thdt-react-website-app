import React from 'react';

//Import React Bootstrap Components
import { Row, Col } from 'react-bootstrap';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const Header = () => {
    return (
        <div className='mt-4'>
            <Row>
                <Col xs={4} md={6}>
                    <Logo />
                </Col>
                <Col xs={8} md={6}>
                    <Menu />
                </Col>
            </Row>
        </div>
    );
};

export default Header;