import React from 'react';

//Import React Bootstrap Components
import { Container } from 'react-bootstrap';

import Header from './Common/Header/Header';
import Sections from './Sections';

const Homepage = () => {
    return (
        <div>
            <Container fluid="xxxl">
                <Header />
                <Sections />
            </Container>
            
        </div>
    );
};

export default Homepage;