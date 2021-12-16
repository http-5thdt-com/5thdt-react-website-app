import React from 'react';

import {Row, Col} from 'react-bootstrap';

import Banner from './Dynamic/Banner/Banner';
import Domain from './Dynamic/Domain/Domain';
import Project from './Dynamic/Projects/Project';
import Funky from './Dynamic/Funky/Funky';
import Testimonial from './Dynamic/Testimonial/Testimonial';

import Footer from './Common/Footer/Footer';

const Sections = () => {
    return (
        <div className='mt-5 px-4'>
            <Row>
                <Col>
                    <Banner />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Domain />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Project />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Funky />
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <Testimonial />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Footer />
                </Col>
            </Row>

        </div>
    );
};

export default Sections;