import React from 'react';

import {Row, Col} from 'react-bootstrap';

const Address = () => {
    return (
        <div>
            <Row className='mt-4'>
                <Col>
                    <div className='d-flex align-self-start flex-row bd-highlight mb-3'>
                        <div className='p-2 bd-highlight'>
                            <h5 class="fs-2 fw-bolder lh-base">Let's make something <br /> amazing together.</h5>
                        </div>                        
                    </div>
                    <div className='d-flex align-self-end flex-row bd-highlight mb-3 mt-3'>
                        <div className='p-2 bd-highlight'>
                            <p>
                                <a href='tel:919811460684'>(+91) 981 - 146 - 0684</a> <br />
                                <a href='tel:919966883734'>(+91) 996 - 688 - 3734</a> <br />
                                <a href='mailto:info@5thdt.com'>info@5thdt.com</a> <br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col>                    
                    <div className='d-flex align-self-start flex-row bd-highlight mb-3'>
                        <div className='p-2 bd-highlight'>
                            <h5>This column has contact address</h5>
                        </div>                        
                    </div>
                    <div className='d-flex align-self-end flex-row bd-highlight mb-3'>
                        <div className='p-2 bd-highlight'>
                        <h5>This column has contact address</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Address;