import React from 'react';

import Address from './Address';
import Copyrights from './Copyrights';

const Footer = () => {
    return (
        <div className='mt-3 mx-2 px-2'>
            <h4>This section has address, phone, email.</h4>
            <Address />
            <Copyrights />
        </div>
    );
};

export default Footer;