import React from 'react';

import {Row, Col} from 'react-bootstrap';

const Copyrights = () => {
    return (
        <div>
            <Row className='mt-4'>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h5 className='text-center'>This column has copyrights info</h5>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h5 className='text-center'>This column has social icons</h5>
                </Col>
            </Row>
        </div>
    );
};

export default Copyrights;